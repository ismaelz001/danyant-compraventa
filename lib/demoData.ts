import type { Car } from "@/components/reels/types";

export const WHATSAPP_PHONE = "34XXXXXXXXX"; // TODO: pon aquí el número real SIN + (ej: 34612345678)

export const cars: Car[] = [
  {
    id: "car_001",
    title: "BMW 320d xDrive 190cv Automático",
    year: 2019,
    km: 68000,
    fuel: "Diésel",
    gearbox: "Automático",
    eco: "C",
    location: "Málaga",
    price: 28990,
    monthlyFrom: 349,
    highlights: ["Tracción total xDrive", "Pack M Sport", "Garantía 12 meses"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/bmw-320d.jpg",
      "/cars/bmw-320d.jpg",
      "/cars/bmw-320d.jpg"
    ],
    descriptionShort: "BMW Serie 3 con tracción total y acabado deportivo M Sport. Perfecto estado.",
    descriptionLong:
      "BMW 320d xDrive en azul metalizado con interior de cuero. Equipado con navegación Professional, sensores aparcamiento, cámara trasera y asientos deportivos. Motor diésel de 190cv con tracción total xDrive para máximo agarre. Mantenimiento oficial BMW, historial completo. Entrega con garantía de 12 meses.",
    workshopNotes: ["Revisión completa reciente", "Cambio aceite y filtros", "Neumáticos 80% vida útil", "ITV pasada"],
    warrantyMonths: 12
  },
  {
    id: "car_002",
    title: "Audi A4 2.0 TDI 150cv Automático",
    year: 2020,
    km: 52000,
    fuel: "Diésel",
    gearbox: "Automático",
    eco: "C",
    location: "Málaga",
    price: 27490,
    monthlyFrom: 329,
    highlights: ["S-Line", "Virtual Cockpit", "Estado impecable"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/audi-a4.jpg",
      "/cars/audi-a4.jpg",
      "/cars/audi-a4.jpg"
    ],
    descriptionShort: "Audi A4 S-Line blanco perlado con tecnología digital avanzada. Como nuevo.",
    descriptionLong:
      "Audi A4 2.0 TDI en acabado S-Line con Virtual Cockpit Plus. Tapicería mixta cuero-alcantara, climatizador bizona, LED Matrix, sensores 360°. Motor 2.0 TDI ultra de 150cv muy eficiente. Único propietario, libro de revisiones sellado. Garantía extendida disponible.",
    workshopNotes: ["Mantenimiento oficial Audi", "Pastillas freno nuevas", "Batería verificada OK", "Sistema AdBlue revisado"],
    warrantyMonths: 12
  },
  {
    id: "car_003",
    title: "Mercedes-Benz Clase C 200d Automático",
    year: 2021,
    km: 38000,
    fuel: "Diésel",
    gearbox: "Automático",
    eco: "C",
    location: "Málaga",
    price: 32990,
    monthlyFrom: 389,
    highlights: ["AMG Line", "MBUX", "Pocas unidades"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/mercedes-c-class.jpg",
      "/cars/mercedes-c-class.jpg",
      "/cars/mercedes-c-class.jpg"
    ],
    descriptionShort: "Mercedes Clase C AMG Line casi nuevo. Maxima elegancia y tecnología MBUX.",
    descriptionLong:
      "Mercedes-Benz Clase C 200d con paquete AMG Line completo. Pantallas digitales MBUX de última generación, tapicería cuero negro, volante deportivo AMG, suspensión deportiva. Motor 2.0 diésel de 163cv muy refinado. Garantía oficial Mercedes vigente hasta 2026. Oportunidad única.",
    workshopNotes: ["Garantía oficial activa", "Primera revisión hecha", "Estado certificado Mercedes", "Neumáticos originales"],
    warrantyMonths: 24
  },
  {
    id: "car_004",
    title: "VW Golf 2.0 GTI 245cv DSG",
    year: 2019,
    km: 72000,
    fuel: "Gasolina",
    gearbox: "Automático",
    eco: "C",
    location: "Málaga",
    price: 25490,
    monthlyFrom: 299,
    highlights: ["Golf GTI", "Cambio DSG", "Prestaciones deportivas"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/vw-golf.jpg",
      "/cars/vw-golf.jpg",
      "/cars/vw-golf.jpg"
    ],
    descriptionShort: "El mítico Golf GTI en rojo tornado. Diversión garantizada con 245cv.",
    descriptionLong:
      "Volkswagen Golf GTI 7.5 en color rojo tornado con interior tartán característico. Motor 2.0 TSI de 245cv con cambio DSG de 7 velocidades. Pantalla Discover Media, climatizador, faros LED, escape deportivo. El hot-hatch por excelencia. Mantenimiento al día, listo para disfrutar.",
    workshopNotes: ["Revisión DSG hecha", "Liquido frenos renovado", "Pastillas y discos 70%", "Escape original en perfecto estado"],
    warrantyMonths: 12
  },
  {
    id: "car_005",
    title: "SEAT León 1.5 TSI 150cv FR",
    year: 2020,
    km: 58000,
    fuel: "Gasolina",
    gearbox: "Manual",
    eco: "C",
    location: "Málaga",
    price: 17990,
    monthlyFrom: 229,
    highlights: ["Acabado FR", "Full Link", "Muy cuidado"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/seat-leon.jpg",
      "/cars/seat-leon.jpg",
      "/cars/seat-leon.jpg"
    ],
    descriptionShort: "SEAT León FR deportivo en gris magnético. Motor 1.5 TSI eficiente y divertido.",
    descriptionLong:
      "SEAT León en acabado FR con diseño deportivo. Motor 1.5 TSI de 150cv con tecnología ACT (desconexión de cilindros). Full Link con Apple CarPlay/Android Auto, volante multifunción, climatizador automático. Consumo muy ajustado para un coche de estas prestaciones. Ideal primer deportivo.",
    workshopNotes: ["Revisión oficial SEAT", "Distribución OK (cadena)", "Sistema Start-Stop revisado", "Alineado y equilibrado"],
    warrantyMonths: 12
  },
  {
    id: "car_006",
    title: "Toyota Corolla 1.8 Hybrid 122cv",
    year: 2021,
    km: 42000,
    fuel: "Híbrido",
    gearbox: "Automático",
    eco: "ECO",
    location: "Málaga",
    price: 21990,
    monthlyFrom: 269,
    highlights: ["Etiqueta ECO", "Hibridación fiable", "Garantía extendida"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/toyota-corolla.jpg",
      "/cars/toyota-corolla.jpg",
      "/cars/toyota-corolla.jpg"
    ],
    descriptionShort: "Toyota Corolla Hybrid ECO con consumo mínimo. Fiabilidad japonesa legendaria.",
    descriptionLong:
      "Toyota Corolla 1.8 Hybrid con sistema Full Hybrid eléctrico-gasolina. Consumo mixto 4.3L/100km, etiqueta ECO para acceso a ciudades. Toyota Safety Sense 2.0, pantalla táctil 8', climatizador bizona. Motor híbrido de 122cv combinados, cambio automático eCVT. Garantía híbrida Toyota 5 años.",
    workshopNotes: ["Batería híbrida garantizada", "Sistema híbrido verificado", "Pastillas específicas OK", "Revisión oficial Toyota"],
    warrantyMonths: 24
  },
  {
    id: "car_007",
    title: "Mazda CX-5 2.2 Skyactiv-D 150cv AWD",
    year: 2020,
    km: 55000,
    fuel: "Diésel",
    gearbox: "Automático",
    eco: "C",
    location: "Málaga",
    price: 26990,
    monthlyFrom: 319,
    highlights: ["Tracción total", "Interior premium", "SUV espacioso"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/mazda-cx5.jpg",
      "/cars/mazda-cx5.jpg",
      "/cars/mazda-cx5.jpg"
    ],
    descriptionShort: "Mazda CX-5 en rojo soul crystal con tracción total. El SUV premium japonés.",
    descriptionLong:
      "Mazda CX-5 2.2 Skyactiv-D con tracción total i-Activ AWD en color Soul Red Crystal. Interior Nappa cuero negro, pantalla MZD Connect, Head-Up Display, sistema Bose 10 altavoces. Motor 2.2 diésel de 150cv muy eficiente. Amplitud y calidad de acabados sobresalientes. Ideal familias.",
    workshopNotes: ["Sistema AWD verificado", "Suspensión revisada", "Frenos delanteros nuevos", "Filtro partículas limpio"],
    warrantyMonths: 12
  },
  {
    id: "car_008",
    title: "Ford Focus 1.5 EcoBoost 150cv ST-Line",
    year: 2019,
    km: 64000,
    fuel: "Gasolina",
    gearbox: "Manual",
    eco: "C",
    location: "Málaga",
    price: 16490,
    monthlyFrom: 209,
    highlights: ["ST-Line deportivo", "SYNC 3", "Precio ajustado"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/ford-focus.jpg",
      "/cars/ford-focus.jpg",
      "/cars/ford-focus.jpg"
    ],
    descriptionShort: "Ford Focus ST-Line azul impact. Deportividad y practicidad en perfecto equilibrio.",
    descriptionLong:
      "Ford Focus con acabado deportivo ST-Line. Motor 1.5 EcoBoost de 150cv con turbo, sistema SYNC 3 con pantalla 8', asientos deportivos Recaro, volante de cuero perforado. Suspensión rebajada, llantas aleación 18'. Muy completo y divertido de conducir. Precio muy competitivo.",
    workshopNotes: ["Correa distribución cambiada", "Turbo revisado OK", "Embrague 60% vida", "Climatizador recargado"],
    warrantyMonths: 12
  },
  {
    id: "car_009",
    title: "Nissan Qashqai 1.3 DIG-T 140cv N-Connecta",
    year: 2020,
    km: 48000,
    fuel: "Gasolina",
    gearbox: "Manual",
    eco: "C",
    location: "Málaga",
    price: 19990,
    monthlyFrom: 249,
    highlights: ["Crossover líder", "Cámara 360°", "Muy versátil"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/nissan-qashqai.jpg",
      "/cars/nissan-qashqai.jpg",
      "/cars/nissan-qashqai.jpg"
    ],
    descriptionShort: "Nissan Qashqai negro perlado. El crossover que revolucionó el segmento.",
    descriptionLong:
      "Nissan Qashqai 1.3 DIG-T con acabado N-Connecta. Cámara 360° Around View, sensores aparcamiento delanteros y traseros, NissanConnect con navegación. Motor 1.3 turbo de 140cv muy ágil. Espacio interior generoso, maletero amplio. El SUV urbano perfecto para familia.",
    workshopNotes: ["Revisión Nissan oficial", "Sistema 360° calibrado", "Neumáticos semi-nuevos", "Batería testada OK"],
    warrantyMonths: 12
  },
  {
    id: "car_010",
    title: "Peugeot 308 1.5 BlueHDi 130cv GT Line",
    year: 2021,
    km: 35000,
    fuel: "Diésel",
    gearbox: "Automático",
    eco: "C",
    location: "Málaga",
    price: 20990,
    monthlyFrom: 259,
    highlights: ["i-Cockpit 3D", "GT Line premium", "Muy eficiente"],
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    images: [
      "/cars/peugeot-308.jpg",
      "/cars/peugeot-308.jpg",
      "/cars/peugeot-308.jpg"
    ],
    descriptionShort: "Peugeot 308 GT Line blanco perlado. Diseño francés con i-Cockpit futurista.",
    descriptionLong:
      "Peugeot 308 con acabado GT Line y cuadro i-Cockpit 3D holográfico único en el mercado. Motor 1.5 BlueHDi de 130cv con cambio automático EAT8 de 8 velocidades. Tapicería mixta Alcántara, asientos con masaje, sistema focal Hi-Fi. Consumo 4.2L/100km. Tecnología y confort francés.",
    workshopNotes: ["Garantía oficial vigente", "Cambio EAT8 revisado", "Filtro AdBlue nuevo", "Sistema i-Cockpit actualizado"],
    warrantyMonths: 18
  }
];
