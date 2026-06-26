# Changelog - Blueberry Blessings

### KROMA-ALIGN-BLUEBERRY-20260625 - 2026-06-25 23:59:00
**Autor:** Antigravity (Google DeepMind AI)
**Estado:** Exitoso

#### 🛠️ Cambios Realizados
*   **components/AboutSection.tsx / components/OrderSection.tsx / components/MapSection.tsx**: [MODIFY] Reducidos los gaps de las cuadrículas de `gap-12` a `gap-6 md:gap-12` para optimizar la compacidad de los bloques en pantallas de celulares.
*   **components/PricingSection.tsx / components/OrderSection.tsx**: [MODIFY] Adaptados los rellenos internos de las tarjetas (`p-6 sm:p-8` y `p-5 sm:p-8` respectivamente) para maximizar la legibilidad en pantallas de dispositivos móviles.

#### 🧪 Verificación y Pruebas
*   **Comando Ejecutado**: `npm run test` y `npm run build`
*   **Resultado de Pruebas**: 1 passed (100% exitoso), compilación sin errores
*   **Verificación Visual**: Lazo Cerrado, confirmado de forma interactiva por el operador humano.

### KROMA-ALIGN-BLUEBERRY-20260625 - 2026-06-25 23:58:00
**Autor:** Antigravity (Google DeepMind AI)
**Estado:** Exitoso

#### 🛠️ Cambios Realizados
*   **components/VideoHero.tsx**: [MODIFY] Reducido el espaciado vertical, tamaño de títulos y dimensiones de la imagen en el Hero Section; eliminado el bloque `overflow-hidden` del contenedor padre para evitar que se corten los textos y botones en pantallas de baja resolución vertical.

#### 🧪 Verificación y Pruebas
*   **Comando Ejecutado**: `npm run test` y `npm run build`
*   **Resultado de Pruebas**: 1 passed (100% exitoso), compilación sin errores
*   **Verificación Visual**: Lazo Cerrado, confirmado de forma interactiva por el operador humano.

### KROMA-ALIGN-BLUEBERRY-20260625 - 2026-06-25 23:56:00
**Autor:** Antigravity (Google DeepMind AI)
**Estado:** Exitoso

#### 🛠️ Cambios Realizados
*   **components/AboutSection.tsx**: [NEW] Creación del componente atómico para la sección de historia y actualización de cosecha 2026 (sábado 27 de junio).
*   **components/PricingSection.tsx**: [NEW] Creación del componente atómico para la tabla de precios detallados de arándanos frescos (Regular/Bulk, cajas de 5 lb/10 lb) y congelados.
*   **components/OrderSection.tsx**: [NEW] Creación del componente de instrucciones de pedido (7 campos obligatorios, celular `604-808-9060`, correo `tastyblueberries@gmail.com` y horario de granja).
*   **components/MapSection.tsx**: [NEW] Creación del componente de ubicación integrando el mapa SVG e incorporando el enlace directo a Google Maps (`https://cutt.ly/1TCnpf`).
*   **components/Footer.tsx**: [NEW] Creación del componente atómico de pie de página para alojar derechos de autor e iconos sociales.
*   **app/page.tsx**: [MODIFY] Refactorizado por completo para servir como orquestador liviano (menor a 30 líneas) importando los subcomponentes atómicos anteriores para cumplir estrictamente con el límite de 250 líneas físicas de código del Manifiesto MAPA.
*   **docs/02_guia_arquitectonica.md**: [MODIFY] Sincronización de la guía arquitectónica de componentes detallando las especificaciones e integrando los nuevos bloques modulares en el diagrama de clases de Mermaid.

#### 🧪 Verificación y Pruebas
*   **Comando Ejecutado**: `npm run test` y `npm run build`
*   **Resultado de Pruebas**: 1 passed (100% exitoso), compilación sin errores
*   **Verificación Visual**: Lazo Cerrado, validado por el desarrollador en pantalla.

### KROMA-ALIGN-BLUEBERRY-20260625 - 2026-06-25 23:52:00
**Autor:** Antigravity (Google DeepMind AI)
**Estado:** Exitoso

#### 🛠️ Cambios Realizados
*   **public/**: [NEW] Copiados los recursos gráficos generados por la IA: `/blueberry_basket.jpg`, `/blueberry_harvest.jpg` y `/blueberry_muffins.jpg`.
*   **components/Logo.tsx**: [NEW] Creación del componente vectorial SVG con el monograma de la marca (doble B entrelazada, gota de rocío y brote).
*   **app/layout.tsx**: [MODIFY] Configurada e importada la fuente premium Google Font `Playfair Display` en las variables globales.
*   **app/globals.css**: [MODIFY] Enlazada la clase de Tailwind `font-serif` a la fuente cargada Playfair Display.
*   **components/VideoHero.tsx**: [MODIFY] Rediseñado el bloque Hero para incorporar la navegación centrada, el logo, los textos promocionales en inglés y la imagen flotante de la canasta de arándanos de acuerdo con el mockup.
*   **app/page.tsx**: [MODIFY] Reemplazados los bloques anteriores por el diseño de tres tarjetas inferiores (Our Harvest, Natural Delights y Visit Us) con el mapa SVG inline interactivo, traduciendo todo el contenido al inglés y añadiendo el pie de página de barra azul y dorada.
*   **docs/02_guia_arquitectonica.md**: [MODIFY] Actualización de la documentación arquitectónica para reflejar la especificación de `Logo.tsx` y la tipografía Playfair Display, adaptando las interacciones en los diagramas de Mermaid.

#### 🧪 Verificación y Pruebas
*   **Comando Ejecutado**: `npm run test` y `npm run build`
*   **Resultado de Pruebas**: 1 passed (100% exitoso), compilación sin errores
*   **Verificación Visual**: Lazo Cerrado, validado por el desarrollador en pantalla.

### KROMA-ALIGN-BLUEBERRY-20260625 - 2026-06-25 23:35:00
**Autor:** Antigravity (Google DeepMind AI)
**Estado:** Exitoso

#### 🛠️ Cambios Realizados
*   **eslint.config.mjs / tsconfig.json / package.json**: [NEW] Inicialización de la aplicación Next.js 16 con Tailwind CSS v4, TypeScript y ESLint en el directorio raíz.
*   **app/globals.css**: [MODIFY] Configuración de los estilos globales, importación de Tailwind v4 y definición del sistema de diseño (colores deep blue, light blue, accent blue, gold y animaciones de desvanecimiento).
*   **app/layout.tsx**: [MODIFY] Actualización de los metadatos de accesibilidad y SEO de la aplicación.
*   **components/VideoHero.tsx**: [NEW] Creación del componente de video Hero adaptable con reproducción en bucle y silenciado en pantalla completa desde `youtube-nocookie.com`, utilizando capas de z-index positivas (`z-0`, `z-10`, `z-20`) para evitar bugs de contexto de apilamiento en el navegador.
*   **app/page.tsx**: [MODIFY] Sustitución del boilerplate de inicio de Next.js por la maquetación principal estructurada con la sección `VideoHero` y la cuadrícula de características de la industria de arándanos de BC.
*   **docs/01_manifesto_mapa.md**: [NEW] Creación del manifiesto y reglas de desarrollo MAPA; actualizado para incluir el registro de cambios (changelog.md) y la regla de sincronización obligatoria de documentación.
*   **vitest.config.ts**: [NEW] Configuración del entorno de testing excluyendo PostCSS para resolver conflictos de imports de ESM/CJS de Tailwind.
*   **components/VideoHero.test.tsx**: [NEW] Adición de la prueba unitaria del componente Hero siguiendo la ceguera voluntaria de código (consultas por roles y etiquetas de accesibilidad).
*   **package.json**: [MODIFY] Habilitación de `"type": "module"`, instalación de dependencias de testing (`vitest`, `happy-dom`, `@testing-library/react`) y adición del script de testing `"test": "vitest run"`.
*   **docs/02_guia_arquitectonica.md**: [NEW] Creación del documento de guía arquitectónica de componentes incluyendo especificaciones detalladas e interacciones en diagramas Mermaid.
*   **docs/**: [NEW] Directorio para almacenar la documentación arquitectónica del proyecto.


#### 🧪 Verificación y Pruebas
*   **Comando Ejecutado**: `npm run test` y `npm run build`
*   **Resultado de Pruebas**: 1 passed (100% exitoso), compilación sin errores
*   **Verificación Visual**: Lazo Cerrado, confirmado de forma interactiva por el operador humano en `http://localhost:3000/` ("abemus video")
