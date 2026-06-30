# GUÍA DE MEJORES PRÁCTICAS SEO (03_mejores_practicas_seo.md)

**ID de Intervención:** KROMA-SEO-DOC-20260626  
**Fecha de Intervención:** 2026-06-26 00:15:00  
**Autor:** Antigravity (Agente de Inteligencia Artificial - Google DeepMind)  
**Estado:** Activo, Consolidado  

---

## 🏛️ 1. PROPÓSITO DEL DOCUMENTO

Este documento establece las mejores prácticas SEO y estrategias de indexabilidad orgánica para la landing page de **Blueberry Blessings**. Su objetivo es posicionar la finca en los motores de búsqueda para términos clave relacionados con la venta local de arándanos libres de pesticidas en la región de Suresalla y British Columbia.

---

## 📍 2. ESTRATEGIA DE SEO LOCAL (GOOGLE MAPS)

Dado que Blueberry Blessings opera principalmente bajo el modelo de recolección en el huerto o recogida física local, el SEO Local es el pilar de mayor retorno de inversión.

### 2.1. Consistencia NAP (Name, Address, Phone)
- **Regla de Oro:** El nombre, la dirección y el número de teléfono deben ser exactamente los mismos en la página web, en Google Business Profile (GBP) y en todos los directorios locales.
  - **Nombre:** `Blueberry Blessings`
  - **Dirección:** `333 Calaraluira Street, Suresalla, TA 22528`
  - **Teléfono:** `672-338-2258`
  - **Correo Electrónico:** `gabrielnino@gmail.com`
- **Impacto:** Cualquier discrepancia (por ejemplo, escribir "St." en lugar de "Street" o usar otro teléfono) confunde el algoritmo de Google, reduciendo la confianza y el posicionamiento en el Local Pack (mapas).

### 2.2. Optimización de Google Business Profile (GBP)
1. **Reclama e Identifica:** Asegura la propiedad del perfil del huerto.
2. **Horarios de Temporada:** Configura con precisión los horarios dinámicos de cosecha (12:00 PM a 9:00 PM). En caso de lluvia o fin de temporada, actualiza inmediatamente el perfil para evitar comentarios negativos.
3. **Reseñas de Clientes:** Fomenta activamente que los visitantes dejen reseñas detalladas en Google. Pídeles que incluyan fotos de sus cestas y usen palabras como *"fresh blueberries"*, *"spray-free"* o *"best BC farm"*.

---

## ✍️ 3. OPTIMIZACIÓN DE CONTENIDO (SEO ON-PAGE)

### 3.1. Estructura de Encabezados (Jerarquía Semántica)
- Mantén un único elemento `<h1>` por página, que ya está definido en la cabecera: `<h1>Welcome to Blueberry Blessings!</h1>`.
- Estructura las subsecciones con etiquetas `<h2>` a `<h4>` jerárquicas y semánticas, evitando saltar niveles (ej: no saltar de `h2` a `h4` directamente).

### 3.2. Intención de Búsqueda y Preguntas Frecuentes (FAQ)
- La web debe responder directamente a las dudas habituales de los clientes. Considera inyectar una sección de preguntas frecuentes con microdatos estructurados de tipo `FAQPage` para ganar espacio en las SERPs (*People Also Ask*):
  - *¿Qué significa "spray-free"?* (Arándanos cultivados sin pesticidas químicos dañinos).
  - *¿Se puede recolectar en la lluvia?* (Los calendarios de cosecha dependen del clima; se debe llamar para confirmar).
  - *¿Cuáles son los precios por volumen?* (Descuentos especiales a partir de 100 libras).

---

## ⚡ 4. SEO TÉCNICO Y CORE WEB VITALS EN NEXT.JS 16

### 4.1. Core Web Vitals Clave
1. **LCP (Largest Contentful Paint):** La imagen destacada principal en la cabecera (`blueberry_basket.jpg`) debe cargar en menos de 2.5 segundos. Se logró utilizando el componente `<Image>` de Next.js con el atributo `priority`.
2. **CLS (Cumulative Layout Shift):** El desplazamiento acumulado del diseño debe ser cercano a 0. Todas las imágenes locales se importan de manera estática con dimensiones definidas (`width` y `height` o clases `relative` + `fill`) para reservar el espacio de renderizado antes de que se descarguen los bytes.
3. **FID (First Input Delay) / INP (Interaction to Next Paint):** Mantén el hilo de ejecución principal libre de JavaScript pesado. El reproductor de YouTube utiliza un iframe diferido mediante estados locales para no retrasar la interactividad del botón principal ("Shop Now").

### 4.2. Robots y Sitemap con Recursos Multimedia
- El archivo `robots.ts` autoriza a todos los rastreadores legítimos.
- El archivo `sitemap.ts` incluye las imágenes de la finca (`images: [...]`) asociadas al dominio. Esto le permite a Google indexar y mostrar nuestras fotos en la pestaña de búsqueda de imágenes.

---

## 🔗 5. CONSTRUCCIÓN DE AUTORIDAD (LINK BUILDING LOCAL)

Google mide la relevancia de tu sitio web basándose en los enlaces entrantes (*backlinks*) de otras páginas web de confianza.

### 5.1. Directorios Locales Recomendados
Registra Blueberry Blessings en los siguientes portales para generar autoridad inicial:
- **BC Blueberry Council** (Organismo oficial de productores en BC).
- **We Heart Local BC** / **Find a Farm BC** (Directorios de granjas locales).
- **Yelp Canadá** y **TripAdvisor** (Sección de atractivos o mercados locales).

### 5.2. Relaciones Públicas y Blogs
- Colabora con blogueros de comida saludable de la región de Vancouver/Surrey para que escriban recetas usando tus arándanos frescos y enlacen al sitio.
- Participa en foros de la comunidad de Suresalla compartiendo consejos de cultivo ecológico.
