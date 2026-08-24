export type Project = {
  id: string;
  name: string;
  img: string;
  area: number;
  floors: 1 | 2;
  rooms: number;
  baths: number;
  price: number;
  badge?: string;
  desc: string;
  features: string[];
  fullDescription: string;
  floorPlans: string[];
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "prajm",
    name: "Прайм",
    img: "/src/assets/projects/prajm/facade-1.png", // Главное фото
    area: 104,
    floors: 1,
    rooms: 3,
    baths: 2,
    price: 6_500_000,
    badge: "Одноэтажный",
    desc: "Проект одноэтажного дома площадью 104 м² с просторной террасой и крыльцом.",
    features: [
      "Мастер-спальня с гардеробной и санузлом",
      "1 или 2 дополнительные комнаты",
      "Просторная терраса и крыльцо — 18 м²",
      "Панорамные окна, наполняющие дом светом",
      "Второй санузел и удобная котельная/постирочная",
      "Высокая безопасность и экологичность"
    ],
    fullDescription: "Проект одноэтажного дома площадью 104 м² с просторной террасой и крыльцом, является оптимальным решением для комфортного проживания семьи из 3-5 человек. Это не просто жилье – это ваш личный оазис комфорта и уюта, где современные технологии сочетаются с комфортом жизни. Продуманная планировка создает атмосферу тепла и гостеприимства с первого шага. Дом имеет мастер-спальню с гардеробом и санузлом. В зависимости от выбранной планировки, вы получаете 1 или 2 дополнительные комнаты (спальня, кабинет, библиотека). Дополнительно предусмотрен второй санузел, а также удобная котельная/постирочная у входа. Панорамные окна наполняют пространство естественным светом и открывают виды на задний двор. Высокая безопасность и экологичность обеспечивается сертифицированными материалами и специальным проектом дома. Предлагаем индивидуальные планировочные решения для каждого покупателя.",
    floorPlans: [
      "/src/assets/projects/prajm/plan-1.png",
      "/src/assets/projects/prajm/plan-2.png",
      "/src/assets/projects/prajm/plan-3.png"
    ],
    gallery: [
      "/src/assets/projects/prajm/facade-2.png",
      "/src/assets/projects/prajm/facade-3.png",
      "/src/assets/projects/prajm/facade-4.png"
    ]
  },
  // Остальные проекты пока оставляем заглушками, но папки для них можно создать сразу
  {
    id: "semeyny",
    name: "Семейный",
    img: "https://image.qwenlm.ai/generated-images/dadbe10f-9678-4245-9729-ec2be78749ce/_result.png",
    area: 124,
    floors: 1,
    rooms: 4,
    baths: 2,
    price: 6_850_000,
    badge: "Ипотека 6%",
    desc: "Одноэтажный дом с тремя спальнями.",
    features: ["Кухня-гостиная", "3 спальни"],
    fullDescription: "Описание проекта.",
    floorPlans: ["/src/assets/plan1.png"],
    gallery: ["/src/assets/foto1.png"]
  },
  {
    id: "klassika",
    name: "Классика",
    img: "https://image.qwenlm.ai/generated-images/de18e130-631f-48a8-8271-b17697b93f88/_result.png",
    area: 142,
    floors: 2,
    rooms: 4,
    baths: 2,
    price: 7_600_000,
    badge: "Хит продаж",
    desc: "Двухэтажная классика.",
    features: ["Кабинет", "Хозяйская спальня"],
    fullDescription: "Описание проекта.",
    floorPlans: ["/src/assets/plan1.png"],
    gallery: ["/src/assets/foto1.png"]
  },
  {
    id: "modern",
    name: "Модерн",
    img: "https://image.qwenlm.ai/generated-images/31270123-3fba-4a72-98c1-cf6dce31a764/_result.png",
    area: 158,
    floors: 2,
    rooms: 5,
    baths: 3,
    price: 8_400_000,
    desc: "Плоская кровля, графитовый фасад.",
    features: ["Остекление в пол", "Терраса"],
    fullDescription: "Описание проекта.",
    floorPlans: ["/src/assets/plan1.png"],
    gallery: ["/src/assets/foto1.png"]
  },
  {
    id: "shale",
    name: "Шале",
    img: "https://image.qwenlm.ai/generated-images/7975079a-9bef-48bb-9e45-6c32dff79aaf/_result.png",
    area: 176,
    floors: 2,
    rooms: 5,
    baths: 2,
    price: 9_200_000,
    badge: "С сауной",
    desc: "Альпийское шале.",
    features: ["Камин", "Сауна"],
    fullDescription: "Описание проекта.",
    floorPlans: ["/src/assets/plan1.png"],
    gallery: ["/src/assets/foto1.png"]
  },
  {
    id: "usadba",
    name: "Усадьба",
    img: "https://image.qwenlm.ai/generated-images/b909da92-3be1-42d8-b3b1-88518b21e100/_result.png",
    area: 212,
    floors: 2,
    rooms: 6,
    baths: 3,
    price: 11_800_000,
    badge: "Премиум",
    desc: "Флагманский проект.",
    features: ["Гараж", "Гостевой блок"],
    fullDescription: "Описание проекта.",
    floorPlans: ["/src/assets/plan1.png"],
    gallery: ["/src/assets/foto1.png"]
  },
];

export const formatPrice = (price: number) => `${(price / 1_000_000).toFixed(2).replace(".", ",").replace(",00", "")} млн ₽`;
export const formatPriceFull = (price: number) => `${price.toLocaleString("ru-RU")} ₽`;