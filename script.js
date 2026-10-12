"use strict";

/* =========================================================
   MIRA CLASSIC EMPIRE
   REUSABLE PERFUMERY WEBSITE TEMPLATE

   =========================================================
   ZONE 01: EDITABLE BRAND SETTINGS

   Change the brand name, WhatsApp number, logo, and background
   when reusing this template for another business.
========================================================= */

const SITE_SETTINGS = {
  brandName: "Mira Classic Empire",

  slogan: "Redefining Your Boundless Beauty",

  whatsappNumber: "2347026428154",

  logo: "assets/logo.webp",

  heroBackground: "assets/mira-background.webp",

  currency: "₦",

  defaultPriceLabel: "DM for Price",

  defaultMessage:
    "Hello Mira Classic Empire, I would like to enquire about your fragrances."
};


/* =========================================================
   ZONE 02: EDITABLE PRODUCT CATALOG

   HOW TO EDIT:
   - name: Product name.
   - images: Exact image filenames inside assets/.
   - price: Enter a number, or use null for DM for Price.
   - collection: feminine, sweet, signature, or gifts.
   - description: Short product copy.
   - featured: true or false.

   Products with multiple images automatically receive
   image navigation in their quick-view window.

   IMPORTANT:
   Do not invent product prices or fragrance specifications.
========================================================= */

const PRODUCTS = [

  {
    id: "9-pm",
    name: "9 PM",
    images: [
      "assets/9_pm_perfume-01.jpg",
      "assets/9_pm_perfume-03.jpg"
    ],
    price: null,
    collection: "signature",
    description:
      "An expressive fragrance choice for those who appreciate a distinctive personal signature.",
    featured: true
  },

  {
    id: "be-tres-mora",
    name: "Be Tres Mora",
    images: [
      "assets/be_tres_mora_perfume.jpg"
    ],
    price: null,
    collection: "feminine",
    description:
      "Discover a fragrance that adds another dimension to your personal style.",
    featured: true
  },

  {
    id: "be-tres-vanilla",
    name: "Be Tres Vanilla",
    images: [
      "assets/be_tres_vanilla_perfume.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "A fragrance selection for those drawn to a warm and inviting aesthetic.",
    featured: true
  },

  {
    id: "cocoa-sunset",
    name: "Cocoa Sunset",
    images: [
      "assets/cocoa_sunset_perfume-01.jpg",
      "assets/cocoa_sunset_perfume-03.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "Explore a fragrance with a name that evokes warmth, depth, and an evening mood.",
    featured: true
  },

  {
    id: "elysia",
    name: "Elysia",
    images: [
      "assets/elysia_perfume.jpg"
    ],
    price: null,
    collection: "feminine",
    description:
      "A considered fragrance choice for a personal collection shaped by individuality.",
    featured: true
  },

  {
    id: "elysia-red",
    name: "Elysia Red",
    images: [
      "assets/elysia_red_perfume.jpg"
    ],
    price: null,
    collection: "signature",
    description:
      "Discover a fragrance that brings a bold visual identity to your collection.",
    featured: true
  },

  {
    id: "gold-mousuf",
    name: "Gold Mousuf",
    images: [
      "assets/gold_mousuf_perfume.jpg"
    ],
    price: null,
    collection: "signature",
    description:
      "A striking addition to a collection built around personal expression.",
    featured: true
  },

  {
    id: "hayaati-gold",
    name: "Hayaati Gold",
    images: [
      "assets/hayaati_gold_perfume.jpg"
    ],
    price: null,
    collection: "signature",
    description:
      "Explore a distinctive fragrance option for your everyday or special-occasion collection.",
    featured: true
  },

  {
    id: "hayaati-pink",
    name: "Hayaati Pink",
    images: [
      "assets/hayaati_pink_perfume.jpg"
    ],
    price: null,
    collection: "feminine",
    description:
      "A feminine-inspired addition to your fragrance wardrobe.",
    featured: true
  },

  {
    id: "khamrah-qahwa",
    name: "Khamrah Qahwa",
    images: [
      "assets/khamrah_qahwa_perfume.jpg"
    ],
    price: null,
    collection: "signature",
    description:
      "Explore this fragrance and enquire directly about availability and pricing.",
    featured: true
  },

  {
    id: "khamrah-waha",
    name: "Khamrah Waha",
    images: [
      "assets/khamrah_waha_perfume.jpg"
    ],
    price: null,
    collection: "signature",
    description:
      "A distinctive name for fragrance lovers seeking something to call their own.",
    featured: false
  },

  {
    id: "lattafa-eclaire",
    name: "Lattafa Eclaire",
    images: [
      "assets/lattafa_eclaire_perfume-01.jpg",
      "assets/lattafa_eclaire_perfume-03.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "Explore this fragrance and ask us about its current price and availability.",
    featured: true
  },

  {
    id: "lattafa-yara",
    name: "Lattafa Yara",
    images: [
      "assets/lattafa_yara_perfume-01.jpg",
      "assets/lattafa_yara_perfume-02.jpg"
    ],
    price: null,
    collection: "feminine",
    description:
      "A familiar fragrance name to explore as part of your personal collection.",
    featured: true
  },

  {
    id: "pink-mousuf",
    name: "Pink Mousuf",
    images: [
      "assets/pink_mousuf_perfume.jpg"
    ],
    price: null,
    collection: "feminine",
    description:
      "A feminine-inspired fragrance selection for your collection.",
    featured: false
  },

  {
    id: "redrose-kayali",
    name: "Redrose Kayali",
    images: [
      "assets/redrose_kayali_perfume.jpg"
    ],
    price: null,
    collection: "feminine",
    description:
      "Discover this fragrance and enquire directly for product information.",
    featured: true
  },

  {
    id: "sugar-candy",
    name: "Sugar Candy",
    images: [
      "assets/sugar_candy_perfume.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "A playful addition to a collection inspired by individual taste.",
    featured: true
  },

  {
    id: "sugar-regular",
    name: "Sugar Regular",
    images: [
      "assets/sugar_regular_perfume.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "Explore this fragrance and discover whether it belongs in your collection.",
    featured: false
  },

  {
    id: "sweet-touch",
    name: "Sweet Touch",
    images: [
      "assets/sweet_touch_perfume-01.jpg",
      "assets/sweet_touch_perfume-03.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "A fragrance selection for those who enjoy exploring different expressions of scent.",
    featured: true
  },

  {
    id: "vanilla-kayali",
    name: "Vanilla Kayali",
    images: [
      "assets/vanilla_kayali_perfume.jpg"
    ],
    price: null,
    collection: "sweet",
    description:
      "Discover this fragrance and contact us for verified product details.",
    featured: true
  }

];


/* =========================================================
   ZONE 03: EDITABLE QUOTE CAROUSEL

   Add or remove quotes inside this array.
========================================================= */

const PERFUME_QUOTES = [
  "You're never fully dressed without perfume.",

  "A scent is worth a thousand memories.",

  "Wear perfume like invisible jewelry.",

  "Life is short. Smell iconic.",

  "Happiness is adding another perfume to your collection!",

  "Fragrance is the art that makes memory speak.",

  "Invest in your scent. It enters the room before you do.",

  "Leave a little sparkle and a beautiful impression wherever you go.",

  "You can't buy happiness, but you can buy perfume and that's pretty close.",

  "May your day be as fine as your fragrance.",

  "Spoil yourself and buy perfumes today!",

  "Let me be your perfume girl."
];


/* =========================================================
   ZONE 04: COLLECTION SETTINGS

   These names control the collection filters and labels.
========================================================= */

const COLLECTIONS = {
  feminine: "The Feminine Edit",
  sweet: "Sweet Indulgence",
  signature: "The Signature Collection",
  gifts: "Gifts & Treasures"
};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];


/* =========================================================
   WHATSAPP HELPERS
========================================================= */

function buildWhatsAppURL(message) {
  const number = SITE_SETTINGS.whatsappNumber.replace(/\D/g, "");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function productWhatsAppMessage(product) {
  return [
    `Hello ${SITE_SETTINGS.brandName},`,
    "",
    `I'm interested in ${product.name}.`,
    "Please provide the current price and availability.",
    "",
    "Thank you."
  ].join("\n");
}

function updateWhatsAppLinks() {
  const defaultURL = buildWhatsAppURL(
    SITE_SETTINGS.defaultMessage
  );

  $$(".whatsapp-link").forEach(link => {
    link.href = defaultURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  const contactNumber = $("#contactNumber");

  if (contactNumber) {
    const digits = SITE_SETTINGS.whatsappNumber.replace(/\D/g, "");

    if (digits.startsWith("234") && digits.length === 13) {
      contactNumber.textContent =
        `+234 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
    } else {
      contactNumber.textContent = `+${digits}`;
    }
  }
}


/* =========================================================
   PRODUCT HELPERS
========================================================= */

function getProductById(id) {
  return PRODUCTS.find(product => product.id === id);
}

function getCollectionName(collection) {
  return COLLECTIONS[collection] || "Fragrance Collection";
}

function formatPrice(price) {
  if (price === null || price === undefined || price === "") {
    return SITE_SETTINGS.defaultPriceLabel;
  }

  if (typeof price === "number") {
    return `${SITE_SETTINGS.currency}${price.toLocaleString("en-NG")}`;
  }

  return String(price);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}


/* =========================================================
   PRODUCT IMAGE FALLBACK

   If an image fails to load, hide the broken image and
   show a branded fallback instead of a broken icon.
========================================================= */

function handleImageError(image) {
  if (image.dataset.fallbackApplied === "true") {
    return;
  }

  image.dataset.fallbackApplied = "true";

  const fallback = document.createElement("div");

  fallback.className = "product-image-fallback";

  fallback.textContent = "MIRA";

  fallback.style.cssText = [
    "display:grid",
    "place-items:center",
    "width:100%",
    "height:100%",
    "min-height:200px",
    "aspect-ratio:0.79",
    "background:#261732",
    "color:#AEA989",
    "font-family:Georgia,serif",
    "font-size:32px",
    "letter-spacing:5px"
  ].join(";");

  image.replaceWith(fallback);
}


/* =========================================================
   PRODUCT SLIDER STATE
========================================================= */

const productSliderState = {
  filter: "all",
  position: 0,
  visibleProducts: [],
  visibleCount: 4
};

const productTrack = $("#productTrack");
const productSlider = $("#productSlider");


/* =========================================================
   DETERMINE RESPONSIVE SLIDER COUNT
========================================================= */

function getVisibleProductCount() {
  if (window.innerWidth <= 420) {
    return 1;
  }

  if (window.innerWidth <= 760) {
    return 2;
  }

  if (window.innerWidth <= 1000) {
    return 3;
  }

  return 4;
}


/* =========================================================
   RENDER PRODUCT CARDS
========================================================= */

function renderProducts() {
  if (!productTrack) return;

  const filter = productSliderState.filter;

  let filteredProducts = PRODUCTS.filter(product => {
    if (filter === "all") return true;

    return product.collection === filter;
  });

  if (filter === "all") {
    filteredProducts = [
      ...filteredProducts.filter(product => product.featured),
      ...filteredProducts.filter(product => !product.featured)
    ];
  }

  productSliderState.visibleProducts = filteredProducts;

  productSliderState.visibleCount = getVisibleProductCount();

  productSliderState.position = 0;

  if (filteredProducts.length === 0) {
    productTrack.innerHTML = `
      <div class="product-empty">
        No fragrances are available in this collection yet.
      </div>
    `;

    updateSliderControls();

    return;
  }

  productTrack.innerHTML = filteredProducts.map(product => {
    const firstImage = product.images[0] || "";

    const safeName = escapeHTML(product.name);
    const safeDescription = escapeHTML(product.description);
    const safeImage = escapeHTML(firstImage);
    const safeId = escapeHTML(product.id);

    const collectionName = escapeHTML(
      getCollectionName(product.collection)
    );

    const badge = product.featured
      ? `<span class="product-badge">Featured</span>`
      : "";

    return `
      <article class="product-card" data-product-id="${safeId}">

        <div class="product-image-wrap">

          ${badge}

          <button
            class="product-image-button"
            data-product-action="view"
            data-product-id="${safeId}"
            aria-label="View ${safeName} details">

            <img
              class="product-image"
              src="${safeImage}"
              alt="${safeName} perfume"
              loading="lazy"
              decoding="async">

          </button>

          <button
            class="product-quick-view"
            data-product-action="view"
            data-product-id="${safeId}">

            Quick View ↗

          </button>

        </div>

        <div class="product-details">

          <span class="product-collection">
            ${collectionName}
          </span>

          <h3 class="product-name">${safeName}</h3>

          <p class="product-description">
            ${safeDescription}
          </p>

          <div class="product-bottom">

            <span class="product-price">
              ${escapeHTML(formatPrice(product.price))}
            </span>

            <a
              class="product-order"
              href="${buildWhatsAppURL(productWhatsAppMessage(product))}"
              target="_blank"
              rel="noopener noreferrer">

              Order ↗

            </a>

          </div>

        </div>

      </article>
    `;
  }).join("");

  $$(".product-image", productTrack).forEach(image => {
    image.addEventListener("error", () => handleImageError(image));
  });

  updateSliderPosition();
}


/* =========================================================
   PRODUCT SLIDER MOVEMENT
========================================================= */

function updateSliderPosition() {
  if (!productTrack) return;

  const cards = $$(".product-card", productTrack);

  if (!cards.length) {
    productTrack.style.transform = "translateX(0)";
    updateSliderControls();
    return;
  }

  productSliderState.visibleCount = getVisibleProductCount();

  const maxPosition = Math.max(
    0,
    cards.length - productSliderState.visibleCount
  );

  productSliderState.position = Math.min(
    productSliderState.position,
    maxPosition
  );

  productSliderState.position = Math.max(
    0,
    productSliderState.position
  );

  const cardWidth = cards[0].getBoundingClientRect().width;

  const gap = parseFloat(
    getComputedStyle(productTrack).columnGap ||
    getComputedStyle(productTrack).gap
  ) || 0;

  const offset = productSliderState.position * (cardWidth + gap);

  productTrack.style.transform = `translateX(-${offset}px)`;

  updateSliderControls();
}

function moveProductSlider(direction) {
  const cards = $$(".product-card", productTrack);

  if (!cards.length) return;

  const maxPosition = Math.max(
    0,
    cards.length - getVisibleProductCount()
  );

  productSliderState.position += direction;

  if (productSliderState.position > maxPosition) {
    productSliderState.position = 0;
  }

  if (productSliderState.position < 0) {
    productSliderState.position = maxPosition;
  }

  updateSliderPosition();
}

function updateSliderControls() {
  const previous = $("#productPrev");
  const next = $("#productNext");
  const progress = $("#sliderProgress");

  const total = productSliderState.visibleProducts.length;

  const visible = getVisibleProductCount();

  const maxPosition = Math.max(0, total - visible);

  if (previous) {
    previous.disabled = total <= visible;
    previous.style.opacity = total <= visible ? "0.35" : "1";
  }

  if (next) {
    next.disabled = total <= visible;
    next.style.opacity = total <= visible ? "0.35" : "1";
  }

  if (progress) {
    const percentage = maxPosition === 0
      ? 100
      : ((productSliderState.position + visible) / total) * 100;

    progress.style.width = `${Math.min(100, percentage)}%`;
  }
}


/* =========================================================
   PRODUCT FILTERS
========================================================= */

function initializeProductFilters() {
  const filterContainer = $("#productFilters");

  if (!filterContainer) return;

  filterContainer.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");

    if (!button) return;

    const filter = button.dataset.filter;

    productSliderState.filter = filter;

    $$(".filter-button", filterContainer).forEach(filterButton => {
      const isActive = filterButton === button;

      filterButton.classList.toggle("active", isActive);

      filterButton.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });

    renderProducts();
  });
}


/* =========================================================
   COLLECTION SHORTCUTS
========================================================= */

function initializeCollectionCards() {
  $$(".collection-card").forEach(card => {
    card.addEventListener("click", () => {
      const collection = card.dataset.collection;

      productSliderState.filter = collection;

      const filterButton = $(
        `[data-filter="${collection}"]`,
        $("#productFilters")
      );

      if (filterButton) {
        $$(".filter-button", $("#productFilters")).forEach(button => {
          const isActive = button === filterButton;

          button.classList.toggle("active", isActive);

          button.setAttribute(
            "aria-pressed",
            String(isActive)
          );
        });
      }

      renderProducts();

      $("#fragrances")?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth"
      });
    });
  });
}


/* =========================================================
   PRODUCT QUICK-VIEW MODAL
========================================================= */

const modal = $("#productModal");

let currentModalProduct = null;
let currentModalImageIndex = 0;
let previouslyFocusedElement = null;

function openProductModal(product) {
  if (!modal || !product) return;

  currentModalProduct = product;
  currentModalImageIndex = 0;

  previouslyFocusedElement = document.activeElement;

  $("#modalProductName").textContent = product.name;

  $("#modalProductPrice").textContent = formatPrice(product.price);

  $("#modalProductDescription").textContent = product.description;

  $("#modalCollection").textContent =
    getCollectionName(product.collection);

  const orderButton = $("#modalOrderButton");

  orderButton.href = buildWhatsAppURL(
    productWhatsAppMessage(product)
  );

  orderButton.target = "_blank";
  orderButton.rel = "noopener noreferrer";

  updateModalImage();

  modal.classList.add("is-open");

  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  $("#modalClose")?.focus();
}

function closeProductModal() {
  if (!modal) return;

  modal.classList.remove("is-open");

  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  currentModalProduct = null;

  if (previouslyFocusedElement &&
      typeof previouslyFocusedElement.focus === "function") {
    previouslyFocusedElement.focus();
  }
}

function updateModalImage() {
  if (!currentModalProduct) return;

  const images = currentModalProduct.images || [];

  if (!images.length) return;

  currentModalImageIndex =
    (currentModalImageIndex + images.length) % images.length;

  const image = $("#modalProductImage");

  image.onerror = null;

  image.src = images[currentModalImageIndex];

  image.alt = `${currentModalProduct.name} perfume`;

  image.onerror = () => handleImageError(image);

  $("#modalImageCount").textContent =
    `${currentModalImageIndex + 1} / ${images.length}`;

  const multipleImages = images.length > 1;

  $("#modalImagePrev").hidden = !multipleImages;

  $("#modalImageNext").hidden = !multipleImages;

  $("#modalImageCount").hidden = !multipleImages;
}

function moveModalImage(direction) {
  if (!currentModalProduct) return;

  const images = currentModalProduct.images || [];

  if (images.length <= 1) return;

  currentModalImageIndex += direction;

  updateModalImage();
}

function initializeProductModal() {
  if (!modal) return;

  productTrack.addEventListener("click", event => {
    const button = event.target.closest("[data-product-action='view']");

    if (!button) return;

    const product = getProductById(button.dataset.productId);

    openProductModal(product);
  });

  $("#modalClose")?.addEventListener("click", closeProductModal);

  $$("[data-close-modal]", modal).forEach(element => {
    element.addEventListener("click", closeProductModal);
  });

  $("#modalImagePrev")?.addEventListener("click", () => {
    moveModalImage(-1);
  });

  $("#modalImageNext")?.addEventListener("click", () => {
    moveModalImage(1);
  });

  document.addEventListener("keydown", event => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeProductModal();
    }

    if (event.key === "ArrowLeft") {
      moveModalImage(-1);
    }

    if (event.key === "ArrowRight") {
      moveModalImage(1);
    }
  });

  let touchStartX = 0;

  const modalImageArea = $(".modal-image-area");

  modalImageArea?.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  modalImageArea?.addEventListener("touchend", event => {
    const touchEndX = event.changedTouches[0].clientX;

    const distance = touchEndX - touchStartX;

    if (Math.abs(distance) < 45) return;

    moveModalImage(distance < 0 ? 1 : -1);
  }, { passive: true });
}


/* =========================================================
   QUOTE CAROUSEL
========================================================= */

let currentQuoteIndex = 0;
let quoteInterval = null;

const quoteText = $("#quoteText");
const quoteCounter = $("#quoteCounter");
const quoteDots = $("#quoteDots");
const quoteSection = $("#fragranceQuotes");

function renderQuoteDots() {
  if (!quoteDots) return;

  quoteDots.innerHTML = PERFUME_QUOTES.map((_, index) => `
    <button
      class="quote-dot ${index === currentQuoteIndex ? "active" : ""}"
      data-quote-index="${index}"
      aria-label="Show quote ${index + 1}"
      aria-pressed="${index === currentQuoteIndex}">
    </button>
  `).join("");
}

function showQuote(index) {
  if (!PERFUME_QUOTES.length || !quoteText) return;

  currentQuoteIndex =
    (index + PERFUME_QUOTES.length) % PERFUME_QUOTES.length;

  quoteText.textContent = PERFUME_QUOTES[currentQuoteIndex];

  if (quoteCounter) {
    quoteCounter.textContent =
      `${String(currentQuoteIndex + 1).padStart(2, "0")} / ${String(PERFUME_QUOTES.length).padStart(2, "0")}`;
  }

  renderQuoteDots();
}

function startQuoteAutoplay() {
  stopQuoteAutoplay();

  if (PERFUME_QUOTES.length <= 1) return;

  if (window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches) {
    return;
  }

  quoteInterval = window.setInterval(() => {
    showQuote(currentQuoteIndex + 1);
  }, 5500);
}

function stopQuoteAutoplay() {
  if (quoteInterval !== null) {
    window.clearInterval(quoteInterval);

    quoteInterval = null;
  }
}

function initializeQuoteCarousel() {
  if (!quoteText || !PERFUME_QUOTES.length) return;

  showQuote(0);

  $("#quotePrev")?.addEventListener("click", () => {
    showQuote(currentQuoteIndex - 1);
    startQuoteAutoplay();
  });

  $("#quoteNext")?.addEventListener("click", () => {
    showQuote(currentQuoteIndex + 1);
    startQuoteAutoplay();
  });

  quoteDots?.addEventListener("click", event => {
    const button = event.target.closest("[data-quote-index]");

    if (!button) return;

    showQuote(Number(button.dataset.quoteIndex));

    startQuoteAutoplay();
  });

  quoteSection?.addEventListener("mouseenter", stopQuoteAutoplay);

  quoteSection?.addEventListener("mouseleave", startQuoteAutoplay);

  quoteSection?.addEventListener("focusin", stopQuoteAutoplay);

  quoteSection?.addEventListener("focusout", event => {
    if (!quoteSection.contains(event.relatedTarget)) {
      startQuoteAutoplay();
    }
  });

  startQuoteAutoplay();
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");

  if (!toggle || !nav) return;

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");

    toggle.setAttribute("aria-label", "Open navigation");

    nav.classList.remove("is-open");
  }

  toggle.addEventListener("click", () => {
    const isExpanded =
      toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isExpanded));

    toggle.setAttribute(
      "aria-label",
      isExpanded ? "Open navigation" : "Close navigation"
    );

    nav.classList.toggle("is-open", !isExpanded);
  });

  $$("a", nav).forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}


/* =========================================================
   PRODUCT SLIDER CONTROLS
========================================================= */

function initializeProductSlider() {
  $("#productPrev")?.addEventListener("click", () => {
    moveProductSlider(-1);
  });

  $("#productNext")?.addEventListener("click", () => {
    moveProductSlider(1);
  });

  let touchStartX = 0;
  let touchStartY = 0;

  productSlider?.addEventListener("touchstart", event => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });

  productSlider?.addEventListener("touchend", event => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = touchEndX - touchStartX;
    const distanceY = touchEndY - touchStartY;

    if (Math.abs(distanceX) < 45) return;

    if (Math.abs(distanceX) <= Math.abs(distanceY)) return;

    moveProductSlider(distanceX < 0 ? 1 : -1);
  }, { passive: true });

  let resizeTimeout;

  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimeout);

    resizeTimeout = window.setTimeout(() => {
      updateSliderPosition();
    }, 100);
  });
}


/* =========================================================
   FOOTER YEAR
========================================================= */

function initializeFooter() {
  const yearElement = $("#currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}


/* =========================================================
   IMAGE AND LOGO CONFIGURATION
========================================================= */

function initializeBrandAssets() {
  const hero = $(".hero");

  if (hero) {
    hero.style.backgroundImage =
      `url("${SITE_SETTINGS.heroBackground}")`;
  }

  const brandImages = [
    ...$$(".brand img"),
    ...$$(".footer-logo img")
  ];

  brandImages.forEach(image => {
    image.onerror = () => {
      image.style.display = "none";

      const fallback = image.parentElement.querySelector(
        ".brand-fallback"
      );

      if (fallback) {
        fallback.style.display = "block";
      }
    };
  });
}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

function initializeWebsite() {
  updateWhatsAppLinks();

  initializeBrandAssets();

  initializeNavigation();

  initializeProductFilters();

  initializeCollectionCards();

  initializeProductSlider();

  initializeProductModal();

  initializeQuoteCarousel();

  initializeFooter();

  renderProducts();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeWebsite);
} else {
  initializeWebsite();
      }
    
