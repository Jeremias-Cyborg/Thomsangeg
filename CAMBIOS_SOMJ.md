# Actualización web THOM SANG — SOMJ Technology (28/10/2026)

No se ha tocado nada del servidor (app.js, package.json, .env, rutas, formulario /send-email).

## Nuevo
- **public/projects.html**: página "Our Projects" con el proyecto Zafiro destacado, plantilla comentada para añadir proyectos, bloque "How We Work" y llamada a la acción.
- "Our Projects" añadido al menú y al footer de todas las páginas, y al sitemap.xml.
- **img/og-image.jpg**: imagen para compartir en redes (antes no existía).

## Corregido
- Párrafo "Our core values…" repetido 8 veces: se queda solo en index (About) y about (equipo); el resto con textos propios.
- Portada: los falsos "testimonios" pasan a "Featured Project" (Zafiro) con botón "View All Projects". Eliminado el texto de 2025.
- Contadores "Many / 2+" sustituidos por "6 Core Services / 24/7 Response Teams".
- Insignia "3 Years Experience" sustituida por "Since 2022" (no caduca).
- Erratas: Bulk Tank Cleaning, CCU Repairs, 24/7 Services, Block B, Sango Amadino, cargos unificados (CEO & Founder, Field Operations Manager).
- Título de plantilla "Construction And Renovation Solutions" → "Integrated Oil & Gas Support Services".
- Formularios con action="http://localhost:3000/…" → "/send-email".
- Footer unificado en las 9 páginas, con "Website maintained by SOMJ Technology".
- Iconos de redes sociales con enlace "#" retirados hasta tener las URLs reales.
- team.html: eliminadas las 5 tarjetas de relleno "Team Member / Engineer".
- 404: eliminada la referencia a un buscador inexistente.
- robots.txt: ya no bloquea /js/ y /lib/.

## Eliminado (no se usaba)
- 12 imágenes de stock sin uso, carpeta public/scss/ y lib/waypoints/links.php.
- Se conserva worker-8.jpg (foto de una persona real, no usada): confirmar con el cliente.

## Pendiente de datos del cliente
- URLs de redes sociales.
- Horario real (topbar dice L–V 09–21, otras partes dicen 24/7).
- Año de fundación (2022) y datos del proyecto Zafiro: año y servicios prestados.
- Fotos reales de proyectos → img/projects/ (usar nombres nuevos: las imágenes se cachean 30 días).
- Revisar textos de "How We Work" en projects.html.

## Actualización 2 — cuadrícula de proyectos
- projects.html: cuadrícula de tarjetas del mismo tamaño (imagen 3:2, título, cliente, lugar, fecha, descripción), filtros por servicio y orden del más nuevo al más antiguo.
- 6 tarjetas de EJEMPLO con las fotos de img/services/ y la etiqueta amarilla "SAMPLE". Sustituirlas por proyectos reales (o borrarlas) antes de publicar.
- Para publicar un proyecto: copiar un bloque `<!-- PROJECT n -->`, cambiar los datos, poner la foto en img/projects/ y borrar la línea `project-sample`. El filtro funciona con `data-category`.
- Estilos nuevos al final de css/style.css (sección "Projects page"), con los colores de la marca (rojo --secondary y azul oscuro --dark).

## Actualización 3 — cabeceras y enlaces
- Cabecera (carrusel de Home y banner de las demás páginas) con la misma altura en todas: 420–620 px en ordenador (65 % de la pantalla) y 420 px en móvil. La foto se recorta centrada arriba para que se vean las caras.
- Causa del tamaño distinto: el body es flex en columna (footer pegado abajo) y encogía los banners. Corregido con `body > * { flex-shrink: 0 }`.
- Enlace "Home" del breadcrumb y del copyright: de "/" a "index.html", para que funcione también abriendo los archivos en local o con Live Server.
- Texto de la página actual del breadcrumb, antes verde e ilegible, ahora en blanco suave.
- Comprobados los 48 enlaces y recursos internos de todas las páginas: todos responden bien.

## Actualización 4 — fotos reales en las cabeceras
- Nuevas fotos del cliente optimizadas (1920 px, ~300–480 KB) en img/hero/ con nombres nuevos (evita la caché de 30 días):
  - Home (carrusel de 3): hero-workshop.jpg (DSC_0005), hero-team-containers.jpg (DSC_0009), hero-safety-briefing.jpg (DSC_0013).
  - About: hero-team-containers.jpg · Services: hero-services-workshop.jpg (DSC_0001) · Projects: hero-lifting-beams.jpg (carrusel/DSC_0107).
  - Contact y resto de páginas: hero-safety-briefing.jpg (fondo por defecto de .page-header).
- Nuevos títulos en el carrusel: "A TEAM YOU CAN TRUST" y "SAFETY IN EVERY OPERATION".
- El encuadre de cada foto se ajusta con object-position / background-position en cada página.

## Actualización 5 — proyectos reales
- projects.html: eliminadas las 6 tarjetas SAMPLE. 8 proyectos reales con fotos del cliente (img/projects/, recortadas a 3:2, 50–160 KB), cliente "Confidential client" y ubicación Malabo:
  ISO Tank Container Cleaning (oct 2026) · Diesel Engine Overhaul (sep 2026) · Lifting Beams Repair & Repainting (ago 2026) · Helipad Construction (ene 2026) · Crawler Crane Track Repair (nov 2025) · Steel Frame Welding & Fabrication (ago 2024) · Metal Recycling Containers Repair (ago 2024) · Cargo Truck Container Repair (jul 2024).
- Fechas tomadas de las fotos (EXIF / nombre de WhatsApp): confirmar con el cliente.
- Proyecto destacado (projects.html y portada): Helipad Construction.
- Filtros: Offshore Support · Tank Cleaning · Mechanical Repairs · Welding & Fabrication · Construction.
- Marca de agua "Infinix AI CAMERA" eliminada por recorte.
- service.html: foto real de fumigación en Pest Control (img/services/pest-control-fumigation.jpg).
- PENDIENTE: confirmar si se puede nombrar a GEPetrol / Petrofac (tarjeta Zafiro en projects.html y textos de about/feature/testimonial).
- PENDIENTE: decidir si se añaden como servicios Welding & Fabrication, Mechanical Repairs y Construction.

## Actualización 6 — nuevos servicios (opción A: 9 servicios, 3×3)
- service.html: 3 servicios nuevos con fotos reales (img/services/, 600×400):
  Welding, Fabrication & Painting · Mechanical Repairs · CCU Handling & Logistics.
- Todas las fotos de servicios con la misma proporción 3:2 (CSS .service-item > img).
- Contadores "6 Core Services" → "9 Core Services" (index, feature, testimonial).
- Datos estructurados (JSON-LD) de index.html: 9 servicios.
- Construction NO se añadió como servicio (solo existe el proyecto del helipuerto): confirmar con el cliente.
