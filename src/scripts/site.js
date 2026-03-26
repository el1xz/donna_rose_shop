const catalogData = {
  featured: {
    title: "То, что выбирают чаще всего",
    description:
      "Самые востребованные композиции для подарков, поздравлений и случаев, когда хочется выбрать красиво и без лишних сомнений.",
    items: [
      {
        title: "Белый фаворит",
        description: "Светлая композиция для поздравлений, семейных праздников и деликатных деловых подарков.",
        price: "от 7 100 ₽",
        note: "частый выбор",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-hit-white-garden.jpg",
        alt: "Белый хит продаж",
        position: "center 22%",
        tags: ["популярный", "для подарка"],
      },
      {
        title: "Спокойный шик",
        description: "Объемная композиция для бизнеса, переговорных и поздравлений, когда важны стиль и впечатление.",
        price: "от 8 900 ₽",
        note: "бизнес и интерьер",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-corporate-soft.jpg",
        alt: "Светлая композиция для хита продаж",
        position: "center 20%",
        tags: ["популярный", "для офиса"],
      },
      {
        title: "Праздничный импульс",
        description: "Яркий букет для дня рождения, праздника и тех случаев, когда хочется выразительного жеста.",
        price: "от 8 400 ₽",
        note: "яркое вручение",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-promo-fuchsia.jpg",
        alt: "Яркий хит продаж",
        position: "center 24%",
        tags: ["яркий", "для праздника"],
      },
    ],
  },
  daily: {
    title: "Для теплых поздравлений и повседневных поводов",
    description:
      "Подборка для теплых поводов, визитов, благодарностей и срочных подарков, где важны свежесть, красота и комфортный бюджет.",
    items: [
      {
        title: "Пудровое утро",
        description: "Легкая пастельная композиция для благодарности, визита и спокойного повседневного подарка.",
        price: "от 3 900 ₽",
        note: "Donna Rosa",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-donna-economy.jpg",
        alt: "Нежный букет эконом-сегмента",
        position: "center 26%",
        tags: ["на каждый день", "пастель"],
      },
      {
        title: "Нежный комплимент",
        description: "Светлая композиция, когда хочется быстро выбрать красивый и аккуратный букет без сомнений.",
        price: "от 5 200 ₽",
        note: "быстрая доставка",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-budget-soft.jpg",
        alt: "Мягкий букет в коробке",
        position: "center 28%",
        tags: ["день в день", "до 6000 ₽"],
      },
      {
        title: "Мягкая линия",
        description: "Нежный букет в спокойной палитре для красивого подарка без лишней торжественности.",
        price: "от 5 900 ₽",
        note: "мягкая палитра",
        actionLabel: "Заказать букет",
        image: "src/images/site/brand-soft-handheld.jpg",
        alt: "Светлый букет в коробке",
        position: "center 25%",
        tags: ["до 7000 ₽", "нежный"],
      },
    ],
  },
  premium: {
    title: "Когда нужен особенный подарок",
    description:
      "Воздушные, статусные и запоминающиеся композиции для особых подарков, важных встреч и красивых событий.",
    items: [
      {
        title: "Светлый штрих",
        description: "Кремово-розовая композиция для тех, кто ценит деликатную, светлую и элегантную подачу.",
        price: "от 9 900 ₽",
        note: "L&SUN",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-premium-white.jpg",
        alt: "Премиальная светлая композиция",
        position: "center 20%",
        tags: ["премиум", "светлая палитра"],
      },
      {
        title: "Тихая роскошь",
        description: "Пышная, но собранная композиция для юбилея, камерного события и важного вручения.",
        price: "от 12 500 ₽",
        note: "индивидуальная сборка",
        actionLabel: "Заказать букет",
        image: "src/images/site/collection-premium-signature.jpg",
        alt: "Премиальный авторский букет",
        position: "center 18%",
        tags: ["авторский", "для события"],
      },
      {
        title: "Большой жест",
        description: "Крупная композиция для случая, когда букет должен сразу производить впечатление и оставаться изысканным.",
        price: "от 15 900 ₽",
        note: "сложный заказ",
        actionLabel: "Заказать букет",
        image: "src/images/site/hero-lsun-main.jpg",
        alt: "Премиальная коробка с букетом",
        position: "center 30%",
        tags: ["премиум", "под заказ"],
      },
    ],
  },
  wedding: {
    title: "Для свадебного дня и оформления пространства",
    description:
      "Букет невесты, оформление столов, welcome-зона и цветочные акценты в единой палитре для красивого свадебного дня.",
    items: [
      {
        title: "Букет невесты",
        description: "Подберем форму, оттенки и ленты под платье, площадку, сезон и настроение торжества.",
        price: "от 8 900 ₽",
        note: "по референсу",
        actionLabel: "Оставить заявку",
        image: "src/images/site/hero-pastel-box.jpg",
        alt: "Пастельная композиция для свадьбы",
        position: "center 32%",
        tags: ["невестам", "букет невесты"],
      },
      {
        title: "Оформление зала",
        description: "Композиции на столы, выездную регистрацию и акцентные зоны в мягкой и гармоничной палитре.",
        price: "от 14 900 ₽",
        note: "проект под мероприятие",
        actionLabel: "Оставить заявку",
        image: "src/images/site/service-event-design.jpg",
        alt: "Большая композиция для свадебного мероприятия",
        position: "center 24%",
        tags: ["декор зала", "настольные композиции"],
      },
      {
        title: "Фотозона и акценты",
        description: "Поможем оформить фотозону и декоративные акценты так, чтобы все выглядело цельно и празднично.",
        price: "от 12 000 ₽",
        note: "комплексное оформление",
        actionLabel: "Оставить заявку",
        image: "src/images/site/seasonal-festive-arrangement.jpg",
        alt: "Композиция для фотозоны",
        position: "center 28%",
        tags: ["фотозона", "декор"],
      },
    ],
  },
  business: {
    title: "Для партнеров, офиса и деловых событий",
    description:
      "Композиции для reception, переговорных, партнеров и корпоративных событий, где важны аккуратность, стиль и точная подача.",
    items: [
      {
        title: "Для переговорных",
        description: "Сдержанные композиции для столов, reception и рабочих пространств, которые выглядят аккуратно и статусно.",
        price: "от 8 900 ₽",
        note: "регулярное обслуживание",
        actionLabel: "Оставить заявку",
        image: "src/images/site/collection-corporate-soft.jpg",
        alt: "Композиция для бизнеса",
        position: "center 18%",
        tags: ["офис", "интерьер"],
      },
      {
        title: "Подарок партнерам",
        description: "Статусные букеты и коробки для деловых встреч, юбилеев компании и поздравления важных клиентов.",
        price: "от 11 500 ₽",
        note: "деловой подарок",
        actionLabel: "Оставить заявку",
        image: "src/images/site/collection-premium-signature.jpg",
        alt: "Подарочная композиция для корпоративного клиента",
        position: "center 20%",
        tags: ["партнерам", "подарок"],
      },
      {
        title: "Сцена и welcome-зона",
        description: "Оформление стойки регистрации, welcome-зоны и деловых мероприятий с доставкой точно ко времени.",
        price: "от 13 500 ₽",
        note: "ко времени",
        actionLabel: "Оставить заявку",
        image: "src/images/site/delivery-fast-bouquet.jpg",
        alt: "Композиция для сцены или зоны выступления",
        position: "center 20%",
        tags: ["welcome-зона", "мероприятие"],
      },
    ],
  },
};

const navToggle = document.querySelector("[data-nav-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const floatingContact = document.querySelector(".floating-contact");
const catalogGrid = document.querySelector("[data-catalog-grid]");
const catalogTitle = document.querySelector("[data-catalog-title]");
const catalogText = document.querySelector("[data-catalog-text]");
const catalogTabs = Array.from(document.querySelectorAll("[data-tab-trigger]"));
const tabJumpers = Array.from(document.querySelectorAll("[data-jump-tab]"));
const callbackForm = document.querySelector("[data-callback-form]");
const formStatus = document.querySelector("[data-form-status]");

const setFloatingContact = () => {
  if (!floatingContact) {
    return;
  }

  const deliverySection = document.querySelector("#delivery");
  const activationOffset = deliverySection
    ? deliverySection.offsetTop - window.innerHeight * 0.85
    : Math.max(520, window.innerHeight * 1.6);

  floatingContact.classList.toggle("is-visible", window.scrollY > activationOffset);
};

const productCardMarkup = (item) => {
  const tags = item.tags
    .slice(0, 2)
    .map((tag) => `<span class="c-tag">${tag}</span>`)
    .join("");

  return `
    <article class="catalog-card c-product-card c-card">
      <figure class="c-product-card__media">
        <img src="${item.image}" alt="${item.alt}" style="object-position: ${item.position};" />
      </figure>
      <div class="c-product-card__body">
        <div class="c-product-card__tags">${tags}</div>
        <h3 class="c-product-card__title">${item.title}</h3>
        <p class="c-product-card__text">${item.description}</p>
        <div class="c-product-card__footer">
          <div class="c-price">${item.price}<small>${item.note}</small></div>
          <a class="c-button c-button--secondary" href="#contact-form">${item.actionLabel}</a>
        </div>
      </div>
    </article>
  `;
};

const renderCatalog = (key) => {
  const category = catalogData[key] || catalogData.featured;

  if (catalogTitle) {
    catalogTitle.textContent = category.title;
  }

  if (catalogText) {
    catalogText.textContent = category.description;
  }

  if (catalogGrid) {
    catalogGrid.innerHTML = category.items.map(productCardMarkup).join("");
  }

  catalogTabs.forEach((tab) => {
    const isActive = tab.dataset.tabTrigger === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
};

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

catalogTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderCatalog(tab.dataset.tabTrigger);
  });
});

tabJumpers.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTab = button.dataset.jumpTab;
    renderCatalog(nextTab);
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (callbackForm && formStatus) {
  callbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(callbackForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const topic = String(formData.get("topic") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const body = [
      "Новая заявка с сайта Donna Rosa / L&SUN",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Тема: ${topic}`,
      `Комментарий: ${message || "не указан"}`,
    ].join("\n");

    formStatus.textContent =
      "Сейчас откроем письмо для менеджера. Если окно не появилось, просто позвоните нам или напишите в соцсетях.";

    window.location.href =
      "mailto:annaformat@mail.ru?subject=" +
      encodeURIComponent(`Заявка с сайта: ${topic}`) +
      "&body=" +
      encodeURIComponent(body);
  });
}

renderCatalog("featured");
setFloatingContact();
window.addEventListener("scroll", setFloatingContact, { passive: true });
