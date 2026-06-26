# REPORTE FORENSE: MANIFESTO MAPA (01_manifesto_mapa.md)

**ID de Intervención:** KROMA-ALIGN-BLUEBERRY-20260625  
**Fecha de Intervención:** 2026-06-25 23:16:00  
**Autor:** Antigravity (Agente de Inteligencia Artificial - Google DeepMind)  
**Estado:** Auditado, Alineado y Consolidado bajo el Método MAPA  

---

## 🏛️ 1. PROPÓSITO GENERAL Y GLOSARIO (NÚCLEO DEL MANIFIESTO MAPA)

El Manifiesto MAPA es un búnker metodológico de ingeniería de software diseñado para optimizar el ciclo de vida de la aplicación Blueberry Blessings (desarrollada enteramente en Next.js) bajo un modelo de un solo fundador humano (Stratega) al mando de múltiples colaboradores de Inteligencia Artificial (Consiglieres / Agentes).

Su objetivo fundamental es neutralizar la dispersión mental y la fatiga cognitiva derivadas de la complejidad arquitectónica de Next.js (App Router, Server/Client Components, Server Actions e hidratación híbrida). Transforma la interacción con Modelos de Lenguaje (LLMs/VLMs) en un proceso científico, predecible y determinista mediante un flujo de desarrollo estrictamente incremental.  

### ¿Qué significa MAPA?

El acrónimo desglosa las cuatro directrices inquebrantables de nuestra arquitectura:

*   **M – Modularidad Crítica:** Control estricto del tamaño de archivos para garantizar la ventana de atención de la IA.  
*   **A – Atómico y Secuencial:** Flujo de trabajo un paso a la vez, eliminando el procesamiento en lote.  
*   **P – Persistencia Funcional:** Vinculación obligatoria de cada corrección a una suite de pruebas automatizadas.  
*   **A – Aseguramiento Visual:** Validación en lazo cerrado para interactuar con la UI sin suposiciones ciegas.  

---

## 🏛️ 2. LOS 4 EJES FUNDAMENTALES DEL MÉTODO MAPA EN NEXT.JS

### M – Modularidad Crítica (Regla de las 250 Líneas)

*   **Regla Inquebrantable:** Ningún archivo de componente (Server o Client Component), hook personalizado, Server Action (`'use server'`) o Route Handler (`route.ts`) podrá exceder, bajo ninguna circunstancia, el límite de 250 líneas físicas de código.  
*   **Excepciones del Ecosistema:** Las suites de pruebas de integración y flujos de automatización E2E en Playwright o Cypress están exentos debido a la densidad de aserciones y configuraciones de entorno requeridas.  
*   **Justificación:** Los modelos de lenguaje degradan exponencialmente su atención y sufren de pérdida de contexto central (*loss in the middle*) cuando la densidad de un archivo supera este límite.  
*   **Mecánica Operativa en Next.js:** Si un componente o controlador acumula complejidad, se debe fragmentar inmediatamente:  
    *   Extrayendo interfaces de UI a subcomponentes atómicos puros en una carpeta local `_components`.  
    *   Delegando la gestión de estado cliente a Custom Hooks independientes.  
    *   Separando las validaciones de esquemas (Zod) y la lógica de negocio de las Server Actions hacia capas de servicios aisladas.  

### A – Atómico y Secuencial (Flujo de Estado Consciente)

*   **Regla Inquebrantable:** Queda estrictamente prohibido el procesamiento de tareas en lote (*task batching*) o avanzar a través de múltiples requerimientos funcionales en una sola iteración de prompt o desarrollo.  
*   **Justificación:** Previene la acumulación de errores lógicos en cascada (como desajustes de hidratación SSR/CSR o fallos de enrutamiento dinámico) y garantiza que la memoria del asistente permanezca perfectamente alineada con el compilador.  
*   **Mecánica Operativa:** El desarrollo se ejecuta paso a paso (ej. primero el esquema de datos, luego la Server Action aislada, y finalmente el componente de UI). Cada cambio exige una confirmación explícitamente exitosa del estado funcional del entorno mediante el éxito de la compilación local (`next dev` y verificación con `next build`) antes de autorizar el avance hacia la siguiente tarea.  

### P – Persistencia Funcional (Bug-to-Test Binding)

*   **Regla Inquebrantable:** Ninguna corrección de error (errores de hidratación, fallas en el ciclo de vida de Client Components o excepciones asíncronas en Server Actions) se considera completada o asentada en el repositorio de Blueberry Blessings hasta que su resolución quede explícitamente blindada por la suite de pruebas automatizadas.  
*   **Mecánica Operativa:** Cada ciclo de resolución de una falla debe mutar la suite de pruebas bajo dos vías exclusivas:  
    *   **Vía A (Evolución):** Si la falla demuestra que un caso de prueba previo en Vitest o Playwright quedó obsoleto o incompleto frente al nuevo comportamiento de la infraestructura, el test existente debe ser modificado y evolucionado, elevando su nivel de aserción.  
    *   **Vía B (Inyección Incremental):** Si la falla expone un caso de esquina (*edgecase*) o un error de renderizado asíncrono no mapeado, es obligatorio codificar e inyectar un nuevo test unitario o E2E explícito como cortafuegos definitivo contra regresiones.  

### A – Aseguramiento Visual (Lazo Cerrado / Closed-Loop)

*   **Regla Inquebrantable:** El software interactuante y las suites de validación prohíben las suposiciones de estado de la UI a ciegas y erradican por completo el uso de esperas temporizadas estáticas desatendidas (`setTimeout` o *hardcoded sleeps*) al operar sobre los entornos de Next.js.  
*   **Justificación:** Las interfaces reactivas y las transiciones del App Router ejecutan re-renderizados asíncronos (como el streaming con Suspense o estados pendientes de `useTransition`) y mutan de forma impredecible, rompiendo las referencias de testing convencionales.  
*   **Mecánica Operativa:** Cada acción crítica es validada por un sensor síncrono o aserción reactiva que espere la mutación real de la UI. El sistema combina el análisis de estados estables con validación cognitiva visual mediante Modelos de Visión-Lenguaje (VLM) analizando Regiones de Interés (ROI) en capturas de pantalla de la aplicación para constatar autónomamente el éxito visual antes de dar por completado un paso de ejecución.  

---

## 👁️ 3. EXTENSIÓN DOCTRINAL: CEGUERA AL CÓDIGO FUENTE (SOURCE CODE BLINDNESS)

Para garantizar la máxima resiliencia ante las optimizaciones automáticas de Next.js y evitar la fragilidad estructural de las pruebas en entornos de producción, la entidad operadora o los agentes automatizados deben adoptar una postura de ceguera voluntaria frente al marcado HTML final de la plataforma.  

### Racional Técnico
Next.js optimiza, minifica y fragmenta el código en bundles asíncronos, alterando o eliminando dinámicamente clases de estilos (como Tailwind CSS) y selectores semánticos en el entorno de producción. Depender de selectores DOM profundos debilita la resiliencia del bot o test ante cualquier actualización de la SPA. La validación legítima debe ocurrir emulando la experiencia del usuario final: interpretando el renderizado físico en pantalla.  

### Directrices de Ejecución en Blueberry Blessings
*   **Priorización del Píxel sobre el Nodo:** La toma de decisiones de navegación, confirmación de carga de componentes (streaming) y verificación de estados en la UI se conduce prioritariamente a través de la interpretación visual de la pantalla (VLM Grounding analizando capturas de píxeles reales).  
*   **Uso del DOM Restringido a Soporte de Accesibilidad:** Las APIs basadas en marcado HTML quedan relegadas única y exclusivamente a interactuar mediante atributos de accesibilidad estables (`aria-*`, `role`) o selectores de texto explícitos provistos por el framework como un sistema pasivo de ajuste de coordenadas (Coordinate Snapping). Ninguna lógica de control o validación puede alimentarse de la estructura interna anidada del HTML de Next.js.  
*   **Escritura No-Invasiva de Hardware:** La inyección de información sobre formularios interactivos se ejecuta emulando los canales de hardware físicos sobre la coordenada del elemento activo, garantizando el disparo correcto de eventos nativos de React (`onChange`, `onBlur`) mediante pulsaciones reales y atajos de teclado de sistema.  

---

## 📋 4. RESOLUCIÓN DE LA INYECCIÓN DE TEXTO VISUAL (EXECUTEVISUALTYPEASYNC)

Para garantizar la resiliencia ante elementos de entrada y editores enriquecidos en Blueberry Blessings, manteniendo la fidelidad de la automatización visual sin depender de hooks internos de React:  

*   **Foco y Obtención de Coordenadas:** El sistema opera sobre el elemento activo enfocado en el navegador (`document.activeElement`). Si las coordenadas del cursor anterior están en el origen, se calculan a partir del centroide geométrico del bounding box del elemento activo, recurriendo a un fallback seguro en caso de excepciones en la lectura de propiedades del layout.  
*   **Validación en Lazo Cerrado (Closed-Loop Validation):**
    *   **Fase 1 (Sensor de Estado del Contenedor):** Se captura un recorte de pantalla de $400 \times 200$ píxeles centrado en la coordenada del elemento interactivo. Un oráculo VLM analiza la Región de Interés (ROI) con el prompt exacto de validación MAPA para determinar si el cursor o el elemento ha mutado visualmente a un estado activo/interactivo (respondiendo estrictamente: `ENABLED` o `DISABLED`).  
    *   **Fase 2 (Sensor de Posición de Hardware):** Verifica que la posición física real simulada del cursor se mantenga estrictamente dentro de los límites de tolerancia geométricos ($\pm 200$ px horizontal y $\pm 100$ px vertical) del ROI del elemento de Next.js.  
*   **Cortocircuito ante Fallos:** Si cualquiera de las dos validaciones falla (y no se ha configurado un `BypassVisualValidation` explícito), el entorno aborta la operación lanzando una excepción fatal de automatización, impidiendo la corrupción de datos o la ejecución incompleta del flujo sobre la app.  
*   **Inyección por Teclado Físico:** Una vez superadas las validaciones visuales, la inyección de texto fluye simulando pulsaciones físicas directas de hardware sobre el elemento activo emitiendo la secuencia: seleccionar todo (`Ctrl + A` / `Cmd + A`), eliminar (`Backspace`) para limpiar el estado interno de React, y finalmente escribir el payload del texto de forma secuencial asegurando el correcto disparo de la reactividad del framework.  

---

## 📋 5. DIRECTIVA DE REGISTRO DE CAMBIOS (CHANGELOG.MD)

*   **Regla Inquebrantable:** Es obligatorio crear y mantener un documento llamado `changelog.md` en la raíz del proyecto.
*   **Mecánica Operativa:** Al final de la ejecución de cada cambio o intervención, el agente de programación debe registrar de manera obligatoria y estructurada los cambios realizados bajo el siguiente formato suministrado:

```markdown
### [ID-DE-INTERVENCION] - YYYY-MM-DD HH:MM:SS
**Autor:** [Nombre/Agente]
**Estado:** [Estado del Cambio, ej: Exitoso, Revertido]

#### 🛠️ Cambios Realizados
*   **[Componente/Archivo]**: [NEW/MODIFY/DELETE] [breve descripción del cambio].

#### 🧪 Verificación y Pruebas
*   **Comando Ejecutado**: [Comando de pruebas, ej: npm run test]
*   **Resultado de Pruebas**: [ej: 1 passed, 100% ok]
*   **Verificación Visual**: [Lazo Cerrado, ej: Confirmado por Operador Humano en localhost]
```

