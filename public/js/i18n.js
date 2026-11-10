/* =====================================================================
   THOM SANG G.E S.L — EN / ES language switcher (SOMJ Technology)
   ---------------------------------------------------------------------
   - No API, no external service: translations are stored below.
   - English is written in the HTML. When Spanish is selected, every
     text that appears in the ES dictionary is replaced on the page.
   - The choice is remembered (localStorage). First visit: Spanish if
     the browser language is Spanish, otherwise English.
   - TO ADD A NEW TEXT: copy the English text exactly as it appears in
     the HTML (spaces/line breaks do not matter) and add its Spanish
     version as a new line in ES below.
   ===================================================================== */
(function () {
    "use strict";

    var ES = {
        // ---------- Navigation / common ----------
        "Home": "Inicio",
        "About Us": "Nosotros",
        "About": "Nosotros",
        "Our Services": "Servicios",
        "Our Projects": "Proyectos",
        "Contact Us": "Contacto",
        "Mon - Fri : 09 AM - 09 PM": "Lun - Vie : 09:00 - 21:00",
        "OUR PRIORITY IS YOUR SAFETY": "SU SEGURIDAD ES NUESTRA PRIORIDAD",
        "Address": "Dirección",
        "Quick Links": "Enlaces rápidos",
        ", All Rights Reserved.": ", todos los derechos reservados.",
        "Website maintained by": "Web mantenida por",
        "Back to top": "Volver arriba",
        "Breadcrumb": "Ruta de navegación",
        "Previous": "Anterior",
        "Next": "Siguiente",
        "Explore Our Services": "Ver nuestros servicios",
        "Request a Quote": "Solicitar presupuesto",
        "Since": "Desde",
        "In Equatorial Guinea": "En Guinea Ecuatorial",

        // ---------- Page titles ----------
        "THOM SANG G.E S.L | Oil & Gas Services in Equatorial Guinea": "THOM SANG G.E S.L | Servicios Oil & Gas en Guinea Ecuatorial",
        "About Us | THOM SANG G.E S.L - Oil & Gas Services Equatorial Guinea": "Nosotros | THOM SANG G.E S.L - Servicios Oil & Gas en Guinea Ecuatorial",
        "Our Services | THOM SANG G.E S.L - Tank Cleaning, HSE & More": "Servicios | THOM SANG G.E S.L - Limpieza de tanques, HSE y más",
        "Our Projects | THOM SANG G.E S.L - Oil & Gas Services Equatorial Guinea": "Proyectos | THOM SANG G.E S.L - Servicios Oil & Gas en Guinea Ecuatorial",
        "Contact Us | THOM SANG G.E S.L - Malabo, Equatorial Guinea": "Contacto | THOM SANG G.E S.L - Malabo, Guinea Ecuatorial",
        "404 Page Not Found | THOM SANG G.E S.L": "404 Página no encontrada | THOM SANG G.E S.L",
        "Our Team | THOM SANG G.E S.L - Expert Oil & Gas Professionals": "Equipo | THOM SANG G.E S.L - Profesionales Oil & Gas",
        "Features | THOM SANG G.E S.L - Why Choose Us": "Ventajas | THOM SANG G.E S.L - Por qué elegirnos",
        "Testimonials | THOM SANG G.E S.L - Client Reviews": "Testimonios | THOM SANG G.E S.L",
        "Book an Appointment | THOM SANG G.E S.L": "Solicitar cita | THOM SANG G.E S.L",

        // ---------- Home: carousel ----------
        "A TEAM YOU CAN TRUST": "UN EQUIPO DE CONFIANZA",
        "SAFETY IN EVERY OPERATION": "SEGURIDAD EN CADA OPERACIÓN",

        // ---------- About ----------
        "Unique Solutions For Developing and Maintaining (HSE) Culture in all our Operations.": "Soluciones para desarrollar y mantener la cultura HSE en todas nuestras operaciones.",
        "Our vision is to become the leading qualified service provider and labour supply company in Equatorial Guinea and beyond. Wherever we operate, we are committed to providing quality solutions and services to our customers and partners.": "Nuestra visión es ser la empresa líder en servicios cualificados y suministro de personal en Guinea Ecuatorial y fuera de ella. Allí donde operamos, nos comprometemos a ofrecer soluciones y servicios de calidad a nuestros clientes y socios.",
        "Our core values are driven by a desire to achieve excellence and operate with the highest standards of integrity that guide our activities and influence the way we work, the way we serve you, and the way we engage in our communities.": "Nuestros valores nacen del deseo de alcanzar la excelencia y de actuar con los más altos estándares de integridad, que guían nuestras actividades e influyen en cómo trabajamos, cómo le servimos y cómo nos relacionamos con nuestras comunidades.",
        "Reliability at 100%": "Fiabilidad al 100 %",
        "24/7 Services": "Servicio 24/7",
        "Verified professionals": "Profesionales verificados",
        "THOM SANG is an independent local Equatoguinean company authorized and registered with the Ministry of Mines and Hydrocarbons (MMH) as a services provider and Onshore/Offshore supply chain services: We are committed to providing professional service to clients and partners, today and in the long term. Our goal is to fill the service gap for the Oil and gas industry in Equatorial Guinea and in many other fields of interest to our clients.": "THOM SANG es una empresa ecuatoguineana independiente, autorizada y registrada en el Ministerio de Minas e Hidrocarburos (MMH) como proveedora de servicios y de cadena de suministro onshore/offshore. Nos comprometemos a ofrecer un servicio profesional a clientes y socios, hoy y a largo plazo. Nuestro objetivo es cubrir las necesidades de servicios de la industria del petróleo y el gas en Guinea Ecuatorial y en otros sectores de interés para nuestros clientes.",
        "Our business model is focused on providing multiple fully integrated services in the country for our customers support. We have teams available 24/7 to respond to any customer requests or queries.": "Nuestro modelo de negocio se centra en ofrecer múltiples servicios totalmente integrados en el país para dar soporte a nuestros clientes. Contamos con equipos disponibles 24/7 para atender cualquier solicitud o consulta.",
        "Our Team": "Nuestro equipo",
        "Our Expert Workers": "Nuestros profesionales",
        "Company Secretary": "Secretaria de la empresa",
        "Lawyer & HR": "Abogado y RR. HH.",
        "Senior Safety Officer": "Responsable de Seguridad",
        "Supply Chain Manager": "Jefe de Cadena de Suministro",
        "Assistant Safety Officer": "Técnica de Seguridad",
        "Workshop Manager": "Jefe de Taller",
        "Logistics Manager": "Jefe de Logística",
        "HSE Manager": "Responsable de HSE",
        "Workshop Manager and Company Technical Representative": "Jefe de Taller y representante técnico de la empresa",

        // ---------- Home: sections ----------
        "Liquid and Dry Bulk Tank Cleaning": "Limpieza de tanques de graneles líquidos y sólidos",
        "Defective CCU Repairs": "Reparación de CCU",
        "Electrical Services": "Servicios eléctricos",
        "Pest Control and Fumigation": "Control de plagas y fumigación",
        "Why Choose Us!": "¿Por qué elegirnos?",
        "Our Specialization And Company Features": "Nuestra especialización y ventajas",
        "Every job we deliver is backed by trained, certified personnel and a structured Safety Management System, so our clients can count on safe, compliant and on-time operations, both onshore and offshore.": "Cada trabajo que realizamos está respaldado por personal formado y certificado y por un Sistema de Gestión de Seguridad estructurado, para que nuestros clientes cuenten con operaciones seguras, conformes a la normativa y a tiempo, tanto onshore como offshore.",
        "Enclosed Space Training Certifications": "Certificación en espacios confinados",
        "Performance Monitoring and Measurement": "Seguimiento y medición del desempeño",
        "Operational Procedures": "Procedimientos operativos",
        "Risk Assessment": "Evaluación de riesgos",
        "Our Policies": "Nuestras políticas",
        "Safety Management System (SMS)": "Sistema de Gestión de Seguridad (SMS)",
        "Environmental, Health, and Safety Policy": "Política de Medio Ambiente, Salud y Seguridad",
        "An Environmental, Health, and Safety (EHS) Policy ensures a safe workplace and responsible environmental practices. It fosters continuous improvement through compliance with relevant regulations and standards.": "Una política de Medio Ambiente, Salud y Seguridad (EHS) garantiza un lugar de trabajo seguro y prácticas medioambientales responsables, y fomenta la mejora continua mediante el cumplimiento de la normativa aplicable.",
        "Regulations Of the Ministry of Labour in Equatorial Guinea": "Normativa del Ministerio de Trabajo de Guinea Ecuatorial",
        "Labor laws safeguard workers' rights, ensuring fair wages, safe conditions, and protection from exploitation. They foster balanced relationships between employers and employees.": "La legislación laboral protege los derechos de los trabajadores: salarios justos, condiciones seguras y protección frente a abusos, favoreciendo relaciones equilibradas entre empresa y empleados.",
        "Privacy and Confidentiality Policy": "Política de privacidad y confidencialidad",
        "Privacy and confidentiality policies safeguard personal and sensitive information from unauthorized access or disclosure. They build trust by ensuring secure handling of all data.": "Las políticas de privacidad y confidencialidad protegen la información personal y sensible frente a accesos o divulgaciones no autorizadas, generando confianza gracias al tratamiento seguro de los datos.",
        "Tell Us What Your Operation Needs": "Cuéntenos qué necesita su operación",
        "Tank cleaning, CCU repairs, electrical, plumbing, pest control or industrial gas supply: send us your request and our team will get back to you with a tailored solution.": "Limpieza de tanques, reparación de CCU, electricidad, fontanería, control de plagas o suministro de gases industriales: envíenos su solicitud y nuestro equipo le responderá con una solución a medida.",
        "Your Name": "Su nombre",
        "Your Email": "Su correo electrónico",
        "Your Mobile": "Su teléfono",
        "Your Phone Number": "Su número de teléfono",
        "Service Type": "Tipo de servicio",
        "Message": "Mensaje",
        "Leave a message here": "Escriba aquí su mensaje",
        "Subject": "Asunto",
        "Send Message": "Enviar mensaje",
        "Meet Our Leadership": "Nuestro equipo directivo",
        "Our leadership team combines field experience and management expertise to make sure every job is delivered safely, efficiently and to the highest standards.": "Nuestro equipo directivo combina experiencia de campo y de gestión para que cada trabajo se realice de forma segura, eficiente y con los más altos estándares.",
        "CEO & Founder": "Director General y Fundador",
        "Field Operations Manager": "Jefe de Operaciones de Campo",
        "Chief of Staff": "Jefa de Gabinete",
        "Featured Project": "Proyecto destacado",
        "We support oil and gas operators in Equatorial Guinea with safe, reliable field services. Discover the projects where our teams have made a difference.": "Apoyamos a los operadores de petróleo y gas en Guinea Ecuatorial con servicios de campo seguros y fiables. Descubra los proyectos en los que nuestros equipos han marcado la diferencia.",
        "Core Services": "Servicios principales",
        "Response Teams": "Equipos de respuesta",
        "View All Projects": "Ver todos los proyectos",

        // ---------- Services ----------
        "Integrated Oil & Gas Support Services": "Servicios integrales de apoyo al sector Oil & Gas",
        "Welding, Fabrication & Painting": "Soldadura, fabricación y pintura",
        "Structural welding, cutting and fabrication of steel structures, followed by surface preparation, protective coating and repainting of beams, containers and frames, carried out by qualified personnel with full PPE, onsite or in our workshop.": "Soldadura estructural, corte y fabricación de estructuras de acero, con preparación de superficies, recubrimiento protector y repintado de vigas, contenedores y bastidores, realizados por personal cualificado con EPI completo, en obra o en nuestro taller.",
        "Mechanical Repairs": "Reparaciones mecánicas",
        "Overhaul and repair of diesel engines, trucks and heavy equipment such as cranes, from disassembly and inspection to reassembly, helping our clients reduce downtime and keep their fleet in service.": "Revisión y reparación de motores diésel, camiones y maquinaria pesada como grúas, desde el desmontaje y la inspección hasta el montaje, para reducir los tiempos de parada y mantener la flota en servicio.",
        "CCU Handling & Logistics": "Manipulación de CCU y logística",
        "Safe loading, transport and handling of cargo carrying units (CCUs), baskets and mini containers with our forklifts and trucks, supporting onshore and offshore supply chain operations.": "Carga, transporte y manipulación seguros de unidades de carga (CCU), cestas y minicontenedores con nuestras carretillas y camiones, en apoyo de la cadena de suministro onshore y offshore.",
        "Tank cleaning for liquid and dry bulks ensures safety and cargo purity through pressure washing, vacuuming, and chemical treatments. These methods prevent contamination and support compliance with industry standards.": "La limpieza de tanques de graneles líquidos y sólidos garantiza la seguridad y la pureza de la carga mediante lavado a presión, aspiración y tratamientos químicos, evitando la contaminación y cumpliendo los estándares del sector.",
        "Repairs of Cargo Carrying Units (CCUs) are vital for maintaining structural integrity and safety in offshore and onshore logistics. Welding, panel replacement, and corrosion control restore damaged containers to operational standards.": "La reparación de unidades de carga (CCU) es clave para mantener su integridad estructural y la seguridad en la logística offshore y onshore. Mediante soldadura, sustitución de paneles y control de la corrosión devolvemos los contenedores dañados a condiciones operativas.",
        "Electrical services ensure safe power distribution across industrial and residential zones. Skilled technicians inspect, install, and maintain wiring, breakers, and control systems to prevent faults or outages. Compliance with electrical codes protects both personnel and infrastructure.": "Nuestros servicios eléctricos garantizan una distribución segura de la energía en zonas industriales y residenciales. Técnicos cualificados inspeccionan, instalan y mantienen cableado, interruptores y sistemas de control para evitar averías y cortes, cumpliendo la normativa eléctrica.",
        "Pest control and fumigation eliminate health risks and protect facilities from infestations. Technicians apply targeted treatments to repel insects, rodents, or termites across urban and industrial sites. Fumigation uses controlled chemicals to disinfect enclosed spaces, ensuring zero tolerance for pests.": "El control de plagas y la fumigación eliminan riesgos sanitarios y protegen las instalaciones. Nuestros técnicos aplican tratamientos específicos contra insectos, roedores y termitas en entornos urbanos e industriales, y desinfectan espacios cerrados con productos controlados.",
        "Plumbing Services": "Fontanería",
        "Plumbing services ensure safe water distribution and efficient wastewater removal across homes and industries. Specialists install, repair, and maintain systems like piping, valves, and fixtures, preventing leaks and water damage. Advanced techniques detect blockages and resolve flow issues, keeping infrastructure compliant and hygienic.": "Nuestros servicios de fontanería garantizan una distribución segura del agua y una evacuación eficiente de las aguas residuales en viviendas e industrias. Instalamos, reparamos y mantenemos tuberías, válvulas y sanitarios, evitando fugas y detectando atascos.",
        "Supply of Industrial and Welding Gases": "Suministro de gases industriales y de soldadura",
        "Supplying industrial and welding gases supports manufacturing, fabrication, and energy sectors with critical resources. Technicians deliver and monitor cylinders or bulk tanks containing oxygen, acetylene, argon, and nitrogen—each tailored to specific operations.": "Suministramos gases industriales y de soldadura a los sectores de fabricación y energía. Entregamos y controlamos botellas y depósitos de oxígeno, acetileno, argón y nitrógeno, adaptados a cada operación.",
        "Send us your request and our team will get back to you with a tailored solution for your site, onshore or offshore.": "Envíenos su solicitud y nuestro equipo le responderá con una solución a medida para su emplazamiento, onshore u offshore.",

        // ---------- Projects ----------
        "Field Experience You Can Trust": "Experiencia de campo en la que confiar",
        "From offshore support to onshore maintenance, our teams work alongside operators in Equatorial Guinea with one rule above all: safety first. These are some of the projects we have been part of.": "Del apoyo offshore al mantenimiento onshore, nuestros equipos trabajan junto a los operadores en Guinea Ecuatorial con una regla por encima de todo: la seguridad primero. Estos son algunos de los proyectos en los que hemos participado.",
        "Helipad Construction": "Construcción de un helipuerto",
        "Construction of a helicopter landing pad in Malabo: concrete platform, surface preparation and painting of the landing markings, delivered by our team under our Safety Management System.": "Construcción de un helipuerto en Malabo: plataforma de hormigón, preparación de la superficie y pintura de la señalización de aterrizaje, ejecutado por nuestro equipo bajo nuestro Sistema de Gestión de Seguridad.",
        "Construction of a helicopter landing pad in Malabo: concrete platform, surface preparation and painting of the landing markings.": "Construcción de un helipuerto en Malabo: plataforma de hormigón, preparación de la superficie y pintura de la señalización de aterrizaje.",
        "Construction of a helicopter landing pad: concrete platform, surface preparation and painting of the landing markings.": "Construcción de un helipuerto: plataforma de hormigón, preparación de la superficie y pintura de la señalización de aterrizaje.",
        "Location:": "Ubicación:",
        "Date:": "Fecha:",
        "Scope:": "Alcance:",
        "Client:": "Cliente:",
        "Confidential": "Confidencial",
        "Confidential client": "Cliente confidencial",
        "Civil works & painting": "Obra civil y pintura",
        "All Projects": "Todos",
        "Offshore Support": "Apoyo offshore",
        "Tank Cleaning": "Limpieza de tanques",
        "Welding & Fabrication": "Soldadura y fabricación",
        "Construction": "Construcción",
        "GEPetrol / Petrofac Zafiro Project": "Proyecto Zafiro GEPetrol / Petrofac",
        "Block B, offshore": "Bloque B, offshore",
        "Block B, Equatorial Guinea": "Bloque B, Guinea Ecuatorial",
        "Ongoing": "En curso",
        "Support services for the revitalization of offshore oil production in Block B, home to the Zafiro field.": "Servicios de apoyo a la revitalización de la producción petrolera offshore en el Bloque B, donde se encuentra el campo Zafiro.",
        "The GEPetrol Petrofac Zafiro Project in Equatorial Guinea is a major initiative aimed at revitalizing offshore oil production in Block B, home to the Zafiro field.": "El proyecto Zafiro de GEPetrol y Petrofac en Guinea Ecuatorial es una gran iniciativa para revitalizar la producción petrolera offshore en el Bloque B, donde se encuentra el campo Zafiro.",
        "ISO Tank Container Cleaning": "Limpieza de contenedor cisterna ISO",
        "Cleaning of an ISO tank container from a secured scaffold, carried out by our team with full PPE and under our safety procedures.": "Limpieza de un contenedor cisterna ISO desde un andamio asegurado, realizada por nuestro equipo con EPI completo y siguiendo nuestros procedimientos de seguridad.",
        "Diesel Engine Overhaul": "Revisión completa de motor diésel",
        "Overhaul of a diesel engine: disassembly, inspection of the cylinder block and crankshaft, and reassembly in our workshop.": "Revisión completa de un motor diésel: desmontaje, inspección del bloque y del cigüeñal, y montaje en nuestro taller.",
        "Lifting Beams Repair & Repainting": "Reparación y pintura de vigas de izado",
        "Repair, surface treatment and repainting of lifting beams, followed by loading and delivery to the client site.": "Reparación, tratamiento de superficie y repintado de vigas de izado, con carga y entrega en las instalaciones del cliente.",
        "Crawler Crane Track Repair": "Reparación de orugas de grúa",
        "High-pressure cleaning, inspection and repair of the track shoes and undercarriage of a crawler crane.": "Limpieza a alta presión, inspección y reparación de las zapatas y el tren de rodaje de una grúa de orugas.",
        "Steel Frame Welding & Fabrication": "Soldadura y fabricación de estructuras de acero",
        "Cutting, grinding and welding of steel frames in our workshop, finished and ready for delivery.": "Corte, amolado y soldadura de estructuras de acero en nuestro taller, terminadas y listas para su entrega.",
        "Metal Recycling Containers Repair": "Reparación de contenedores de reciclaje de metal",
        "Structural welding, panel repairs and full repainting of metal recycling containers to return them to service.": "Soldadura estructural, reparación de paneles y repintado completo de contenedores de reciclaje de metal para devolverlos al servicio.",
        "Cargo Truck Container Repair": "Reparación de caja de camión de carga",
        "Restoration of a truck-mounted cargo container: rust removal, structural repairs and a new protective paint finish.": "Restauración de la caja de carga de un camión: eliminación del óxido, reparaciones estructurales y nuevo acabado de pintura protectora.",
        "January 2026": "Enero 2026",
        "October 2026": "Octubre 2026",
        "September 2026": "Septiembre 2026",
        "August 2026": "Agosto 2026",
        "November 2025": "Noviembre 2025",
        "August 2024": "Agosto 2024",
        "July 2024": "Julio 2024",
        "Have a job for our team?": "¿Tiene un trabajo para nuestro equipo?",
        "How We Work": "Cómo trabajamos",
        "Safety In Every Step": "Seguridad en cada paso",
        "Every job starts with a site survey and a documented risk assessment.": "Cada trabajo empieza con una visita al emplazamiento y una evaluación de riesgos documentada.",
        "Planning": "Planificación",
        "We assign certified personnel, equipment and clear operational procedures.": "Asignamos personal certificado, equipos y procedimientos operativos claros.",
        "Execution": "Ejecución",
        "Work is carried out under our Safety Management System, onshore or offshore.": "El trabajo se realiza bajo nuestro Sistema de Gestión de Seguridad, onshore u offshore.",
        "Monitoring": "Seguimiento",
        "We measure performance and report back so every job meets client standards.": "Medimos el desempeño e informamos al cliente para que cada trabajo cumpla sus estándares.",

        // ---------- Contact ----------
        "If You Have Any Query, Please Contact Us": "Si tiene cualquier consulta, contáctenos",
        "Contact Details": "Datos de contacto",
        "Call: +240222099080": "Tel.: +240222099080",
        "Call: +240222272994": "Tel.: +240222272994",

        // ---------- 404 ----------
        "404 Error": "Error 404",
        "Page Not Found": "Página no encontrada",
        "We're sorry, the page you have looked for does not exist on our website. Please go back to our home page or use the menu above.": "Lo sentimos, la página que busca no existe. Vuelva a la página de inicio o utilice el menú superior.",
        "Go Back To Home": "Volver al inicio",

        // ---------- Secondary pages (feature / team / testimonial / appointment) ----------
        "Features": "Ventajas",
        "Our Features": "Nuestras ventajas",
        "Large number of services provided": "Amplia gama de servicios",
        "Comprehensive oil and gas solutions for all your operational needs.": "Soluciones integrales de oil & gas para todas sus necesidades operativas.",
        "Operating since 2022": "Operando desde 2022",
        "Proven track record delivering quality results in Equatorial Guinea.": "Trayectoria demostrada de resultados de calidad en Guinea Ecuatorial.",
        "A large number of grateful customers": "Numerosos clientes satisfechos",
        "Trusted by leading oil and gas companies operating in the region.": "Con la confianza de empresas líderes de oil & gas en la región.",
        "Always reliable and affordable prices": "Fiabilidad y precios competitivos",
        "Competitive pricing without compromising on safety or quality.": "Precios competitivos sin renunciar a la seguridad ni a la calidad.",
        "Testimonial": "Testimonios",
        "Testimonials": "Testimonios",
        "Client Testimonials": "Testimonios de clientes",
        "What Our Happy Clients Say!": "Lo que dicen nuestros clientes",
        "Appointment": "Cita",
        "Book an Appointment": "Solicitar una cita",
        "Get Appointment": "Pedir cita",
        "A Company Involved In Service And Maintenance": "Una empresa dedicada al servicio y al mantenimiento",
        "Trained, certified personnel and a structured Safety Management System behind every job we deliver.": "Personal formado y certificado y un Sistema de Gestión de Seguridad estructurado detrás de cada trabajo.",

        // ---------- Contact form messages (js/main.js) ----------
        "Your email was sent successfully!": "¡Su mensaje se ha enviado correctamente!",
        "There was a problem sending your email. Please try again later.": "Hubo un problema al enviar su mensaje. Inténtelo de nuevo más tarde."
    };

    var STORAGE_KEY = "ts_lang";
    var originals = new WeakMap();      // text node -> original English
    var attrOriginals = new WeakMap();  // element  -> {attr: original}
    var originalTitle = document.title;

    function norm(s) { return s.replace(/\s+/g, " ").trim(); }

    var ESN = {};
    Object.keys(ES).forEach(function (k) { ESN[norm(k)] = ES[k]; });

    function getLang() {
        var saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
        if (saved === "es" || saved === "en") return saved;
        var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
        return nav.indexOf("es") === 0 ? "es" : "en";
    }

    function translateTextNodes(lang) {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                var p = n.parentNode && n.parentNode.nodeName;
                if (p === "SCRIPT" || p === "STYLE" || p === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
                return /\S/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        var node;
        while ((node = walker.nextNode())) {
            if (!originals.has(node)) originals.set(node, node.nodeValue);
            var en = originals.get(node);
            if (lang === "es") {
                var tr = ESN[norm(en)];
                if (tr) {
                    var lead = en.match(/^\s*/)[0], trail = en.match(/\s*$/)[0];
                    node.nodeValue = lead + tr + trail;
                } else {
                    node.nodeValue = en;
                }
            } else {
                node.nodeValue = en;
            }
        }
    }

    function translateAttributes(lang) {
        var els = document.querySelectorAll("[placeholder], [aria-label], img[alt]");
        els.forEach(function (el) {
            ["placeholder", "aria-label"].forEach(function (attr) {
                if (!el.hasAttribute(attr)) return;
                var store = attrOriginals.get(el) || {};
                if (!(attr in store)) { store[attr] = el.getAttribute(attr); attrOriginals.set(el, store); }
                var en = store[attr];
                el.setAttribute(attr, lang === "es" && ESN[norm(en)] ? ESN[norm(en)] : en);
            });
        });
    }

    function applyLang(lang) {
        document.documentElement.setAttribute("lang", lang);
        translateTextNodes(lang);
        translateAttributes(lang);
        document.title = lang === "es" && ESN[norm(originalTitle)] ? ESN[norm(originalTitle)] : originalTitle;
        document.querySelectorAll(".lang-switch button").forEach(function (b) {
            var on = b.getAttribute("data-lang") === lang;
            b.classList.toggle("active", on);
            b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        window.TS_LANG = lang;
    }

    // Used by js/main.js for the contact form pop-up messages
    window.i18nT = function (text) {
        return window.TS_LANG === "es" && ESN[norm(text)] ? ESN[norm(text)] : text;
    };

    function init() {
        document.querySelectorAll(".lang-switch button").forEach(function (b) {
            b.addEventListener("click", function () {
                var lang = b.getAttribute("data-lang");
                try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
                applyLang(lang);
            });
        });
        applyLang(getLang());
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
