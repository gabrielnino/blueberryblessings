<#
.SYNOPSIS
    Creates a new .NET solution with multiple projects for the DynamicDecision application.
.DESCRIPTION
    This script creates a new solution named DynamicDecision with the following structure:
    - Core (Domain models, interfaces, services)
    - Data (Repository pattern, EF Core, SQLite)
    - Infrastructure (External services, OpenAI integration)
    - Application (Command pattern, event handling)
    - Console (Entry point, DI setup)
    - Tests (xUnit test projects)
    It sets up all project references, adds necessary NuGet packages, and creates basic directory structure.
.NOTES
    Version: 1.0
    Author: Your Name
    Date: $(Get-Date -Format "yyyy-MM-dd")
#>

# Configuration
$solutionName = "DynamicDecision"
$rootDir = "${solutionName}Solution"
$projects = @{
    "Core" = "classlib"
    "Data" = "classlib"
    "Infrastructure" = "classlib"
    "Application" = "classlib"
    "Console" = "console"
}
$testProjects = @{
    "UnitTests" = "xunit"
    "IntegrationTests" = "xunit"
}

# Logging setup
$logFile = Join-Path -Path $PWD -ChildPath "setup.log"
function Write-Log {
    param(
        [string]$message,
        [string]$level = "INFO"
    )
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logEntry = "[$timestamp] [$level] $message"
    Add-Content -Path $logFile -Value $logEntry
    
    switch ($level) {
        "ERROR" { Write-Host $logEntry -ForegroundColor Red }
        "WARN" { Write-Host $logEntry -ForegroundColor Yellow }
        "INFO" { Write-Host $logEntry -ForegroundColor Cyan }
        default { Write-Host $logEntry }
    }
}

try {
    # Initialize progress tracking
    $totalSteps = ($projects.Count + $testProjects.Count) * 3 + 10 # Rough estimate
    $currentStep = 0
    
    function Show-Progress {
        param(
            [string]$activity,
            [string]$status
        )
        
        $currentStep++
        $percentComplete = ($currentStep / $totalSteps) * 100
        Write-Progress -Activity $activity -Status $status -PercentComplete $percentComplete
    }

    Write-Log "Starting solution creation for $solutionName"
    Show-Progress -activity "Initializing" -status "Creating root directory"

    # Create root directory and solution
    if (Test-Path $rootDir) {
        Write-Log "Directory $rootDir already exists. Removing..." -level "WARN"
        Remove-Item $rootDir -Recurse -Force
    }

    New-Item -ItemType Directory -Path $rootDir | Out-Null
    Set-Location $rootDir

    dotnet new sln -n $solutionName
    if (-not $?) {
        throw "Failed to create solution file"
    }
    Write-Log "Solution file created successfully"

    # Create directory structure
    Show-Progress -activity "Creating structure" -status "Setting up src and tests"
    New-Item -ItemType Directory -Path "src" | Out-Null
    New-Item -ItemType Directory -Path "tests" | Out-Null

    # Create projects
    Set-Location "src"
    foreach ($project in $projects.GetEnumerator()) {
        Show-Progress -activity "Creating projects" -status "Creating $($project.Key)"
        
        $projectName = "${solutionName}.$($project.Key)"
        Write-Log "Creating project $projectName"
        
        dotnet new $project.Value -n $projectName -o $projectName
        if (-not $?) {
            throw "Failed to create project $projectName"
        }
        
        # Add common NuGet packages based on project type
        Set-Location $projectName
        
        switch ($project.Key) {
            "Core" {
                dotnet add package MediatR
                dotnet add package FluentValidation
            }
            "Data" {
                dotnet add package Microsoft.EntityFrameworkCore
                dotnet add package Microsoft.EntityFrameworkCore.Sqlite
                dotnet add package Microsoft.EntityFrameworkCore.Design
            }
            "Infrastructure" {
                dotnet add package OpenAI
                dotnet add package System.Reactive
            }
            "Application" {
                dotnet add package MediatR
                dotnet add package System.Reactive
            }
            "Console" {
                dotnet add package Microsoft.Extensions.Hosting
                dotnet add package Microsoft.Extensions.Configuration.Json
                dotnet add package Microsoft.Extensions.Logging.Console
                dotnet add package Serilog
                dotnet add package Serilog.Sinks.File
                dotnet add package Serilog.Sinks.Console
            }
        }
        
        Set-Location ".."
    }
    Set-Location ".."

    # Create test projects
    Set-Location "tests"
    foreach ($testProject in $testProjects.GetEnumerator()) {
        Show-Progress -activity "Creating tests" -status "Creating $($testProject.Key)"
        
        $projectName = "${solutionName}.$($testProject.Key)"
        Write-Log "Creating test project $projectName"
        
        dotnet new $testProject.Value -n $projectName -o $projectName
        if (-not $?) {
            throw "Failed to create test project $projectName"
        }
        
        # Add test packages
        Set-Location $projectName
        dotnet add package Moq
        dotnet add package FluentAssertions
        dotnet add package Microsoft.NET.Test.Sdk
        
        Set-Location ".."
    }
    Set-Location ".."

    # Add projects to solution
    Show-Progress -activity "Solution setup" -status "Adding projects to solution"
    foreach ($project in $projects.GetEnumerator()) {
        $projectName = "${solutionName}.$($project.Key)"
        dotnet sln add "src/$projectName"
        if (-not $?) {
            Write-Log "Failed to add $projectName to solution" -level "WARN"
        }
    }

    foreach ($testProject in $testProjects.GetEnumerator()) {
        $projectName = "${solutionName}.$($testProject.Key)"
        dotnet sln add "tests/$projectName"
        if (-not $?) {
            Write-Log "Failed to add $projectName to solution" -level "WARN"
        }
    }

    # Set up project references (following clean architecture)
    Show-Progress -activity "Configuring dependencies" -status "Setting up references"

    # Application depends on Core
    dotnet add src/${solutionName}.Application/ reference src/${solutionName}.Core/

    # Infrastructure depends on Core
    dotnet add src/${solutionName}.Infrastructure/ reference src/${solutionName}.Core/

    # Data depends on Core
    dotnet add src/${solutionName}.Data/ reference src/${solutionName}.Core/

    # Console depends on Application, Infrastructure, and Data
    dotnet add src/${solutionName}.Console/ reference src/${solutionName}.Application/
    dotnet add src/${solutionName}.Console/ reference src/${solutionName}.Infrastructure/
    dotnet add src/${solutionName}.Console/ reference src/${solutionName}.Data/

    # Test projects reference everything they need to test
    dotnet add tests/${solutionName}.UnitTests/ reference src/${solutionName}.Core/
    dotnet add tests/${solutionName}.UnitTests/ reference src/${solutionName}.Application/
    
    dotnet add tests/${solutionName}.IntegrationTests/ reference src/${solutionName}.Console/
    dotnet add tests/${solutionName}.IntegrationTests/ reference src/${solutionName}.Infrastructure/
    dotnet add tests/${solutionName}.IntegrationTests/ reference src/${solutionName}.Data/

    # Create additional directories for structure
    Show-Progress -activity "Finalizing" -status "Creating additional directories"
    $additionalDirs = @(
        "src/${solutionName}.Console/Commands",
        "src/${solutionName}.Console/Services",
        "src/${solutionName}.Core/Models",
        "src/${solutionName}.Core/Interfaces",
        "src/${solutionName}.Core/Events",
        "src/${solutionName}.Data/Repositories",
        "src/${solutionName}.Data/Migrations",
        "src/${solutionName}.Application/Handlers",
        "src/${solutionName}.Infrastructure/Services",
        "tests/${solutionName}.UnitTests/Handlers",
        "tests/${solutionName}.UnitTests/Services",
        "tests/${solutionName}.IntegrationTests/Repositories",
        "tests/${solutionName}.IntegrationTests/Services"
    )

    foreach ($dir in $additionalDirs) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    # Create basic appsettings.json for Console project
    Show-Progress -activity "Configuration" -status "Creating appsettings"
    $appSettings = @{
        "Logging" = @{
            "LogLevel" = @{
                "Default" = "Information"
                "Microsoft" = "Warning"
            }
        }
        "OpenAISettings" = @{
            "ApiKey" = ""
            "Model" = "gpt-3.5-turbo"
        }
        "DatabaseSettings" = @{
            "ConnectionString" = "Data Source=dynamicdecision.db"
        }
    } | ConvertTo-Json -Depth 5

    Set-Content -Path "src/${solutionName}.Console/appsettings.json" -Value $appSettings
    Set-Content -Path "src/${solutionName}.Console/appsettings.Development.json" -Value $appSettings

    Write-Log "Solution structure created successfully"
    Write-Host "`nSolution created successfully in directory: $(Get-Location)" -ForegroundColor Green
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Add your OpenAI API key to appsettings.json"
    Write-Host "2. Implement your domain models in Core project"
    Write-Host "3. Set up your repositories in Data project"
    Write-Host "4. Implement command handlers in Application project"
    Write-Host "5. Configure DI in Console project's Program.cs"

    # Complete progress
    Write-Progress -Activity "Complete" -Completed
}
catch {
    Write-Log "Error occurred: $_" -level "ERROR"
    Write-Log "Stack trace: $($_.ScriptStackTrace)" -level "ERROR"
    Write-Host "`nAn error occurred during setup. Check the log file at $logFile for details." -ForegroundColor Red
    exit 1
}