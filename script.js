
"use strict";

const newsData = [
  {
    id: 1,
    category: "Ֆուտբոլ",
    title: "Ֆուտբոլային մրցաշրջանը խոստանում է թեժ պայքար",
    description: "Ակումբները շարունակում են պայքարը մրցաշարային աղյուսակի առաջատար դիրքերի համար։",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
    date: "Սպորտային վերլուծություն",
    content: "Այս ցուցադրական նյութը ներկայացնում է ֆուտբոլային մրցաշրջանի շուրջ վերլուծության օրինակ։ Իրական հոդվածի համար այստեղ կարող ես ավելացնել խաղերի արդյունքները, մարզիչների մեկնաբանությունները և թիմերի վիճակագրությունը։"
  },
  {
    id: 2,
    category: "Հոկեյ",
    title: "Հոկեյի մրցաշարերում յուրաքանչյուր միավորը կարևոր է",
    description: "Արագություն, թիմային աշխատանք և վճռորոշ պահեր՝ սառցադաշտում։",
    image: "imiges/hokey.png",
    date: "Մրցաշարեր",
    content: "Հոկեյը պահանջում է բարձր արագություն, ֆիզիկական պատրաստվածություն և արագ որոշումներ։ Այստեղ կարող ես հրապարակել լիգաների նորությունները, խաղերի արդյունքներն ու թիմերի վիճակագրությունը։"
  },
  {
    id: 3,
    category: "Բասկետբոլ",
    title: "Բասկետբոլ. խաղի ընթացքը կարող է փոխվել վայրկյանների ընթացքում",
    description: "Ճշգրիտ նետումներ, պաշտպանություն և թիմային մարտավարություն։",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
    date: "Վերլուծություն",
    content: "Բասկետբոլում արագ հակագրոհներն ու ճշգրիտ նետումները կարող են վճռել հանդիպման ելքը։ Այս բաժնում տեղադրիր առաջնությունների արդյունքները, խաղացողների վիճակագրությունն ու վերլուծությունները։"
  },
  {
    id: 4,
    category: "Վազք",
    title: "Վազք. դիմացկունությունը ձևավորվում է ամենօրյա աշխատանքով",
    description: "Մարզումների ճիշտ պլանավորումը և կարգապահությունը կարևոր են յուրաքանչյուր վազորդի համար։",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
    date: "Մարզումներ",
    content: "Վազորդների պատրաստվածությունը կախված է մարզումների պլանից, վերականգնումից և ճիշտ ծանրաբեռնվածությունից։ Այստեղ կարելի է հրապարակել մրցավազքերի օրացույցը, արդյունքները և մարզիկների պատմությունները։"
  },
  {
    id: 5,
    category: "Ըմբշամարտ",
    title: "Ըմբշամարտ. ուժի, տեխնիկայի և կամքի պայքար",
    description: "Մրցագորգի վրա վճռորոշ են ճիշտ տեխնիկան և մարտավարությունը։",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80",
    date: "Մարզական պայքար",
    content: "Ըմբշամարտը համատեղում է տեխնիկական հմտությունները, ուժը և մարտավարական մտածողությունը։ Այս նյութի փոխարեն կարելի է հրապարակել իրական մրցաշարերի արդյունքներ և հայ ըմբիշների ելույթներ։"
  },
  {
    id: 6,
    category: "Ծանրամարտ",
    title: "Ծանրամարտ. տեխնիկան՝ հաջող ելույթի հիմքում",
    description: "Յուրաքանչյուր հաջող մոտեցման հետևում կանգնած են երկարատև մարզումներ։",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    date: "Ուժային սպորտ",
    content: "Ծանրամարտում կարևոր են տեխնիկան, ուժը, շարժումների վերահսկողությունը և մարզիկի պատրաստվածությունը։ Այստեղ տեղադրիր միջազգային մրցումների արդյունքները, քաշային կարգերը և ռեկորդները։"
  },
  {
    id: 7,
    category: "Ֆուտբոլ",
    title: "Երիտասարդ ֆուտբոլիստները ձգտում են նոր բարձունքների",
    description: "Երիտասարդական ակադեմիաները կարևոր դեր ունեն ապագա մարզիկների զարգացման գործում։",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    date: "Երիտասարդական ֆուտբոլ",
    content: "Երիտասարդական ֆուտբոլում ուշադրության կենտրոնում են մարզիկների զարգացումը, ակադեմիաների աշխատանքը և մրցաշարերը։ Հրապարակիր ստուգված տվյալներ և մարզիչների մեկնաբանությունները։"
  },
  {
    id: 8,
    category: "Հոկեյ",
    title: "Դարպասապահի դերը վճռորոշ է հոկեյում",
    description: "Արագ ռեակցիան և ճիշտ դիրքավորումը կարող են փոխել խաղի արդյունքը։",
    image: "imiges/hokey.png",
    date: "Մարզիկներ",
    content: "Դարպասապահի աշխատանքը պահանջում է կենտրոնացում, ռեակցիա և դիրքավորման բարձր մակարդակ։ Այս բաժնում կարող ես ներկայացնել դարպասապահների վիճակագրությունն ու խաղային դրվագները։"
  },
  {
    id: 9,
    category: "Բասկետբոլ",
    title: "Թիմային խաղը բասկետբոլի հաջողության գրավականն է",
    description: "Փոխանցումները և պաշտպանական կազմակերպվածությունը ձևավորում են թիմի խաղը։",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80",
    date: "Թիմային սպորտ",
    content: "Բասկետբոլի ժամանակակից մարտավարության մեջ կարևոր են տարածության օգտագործումը, փոխանցումների արագությունը և պաշտպանական կազմակերպվածությունը։"
  },
  {
    id: 10,
    category: "Վազք",
    title: "Մարաթոն. պատրաստվածությունն ու համբերությունը՝ միասին",
    description: "Երկար տարածությունների վազքը պահանջում է հետևողական մարզում և ճիշտ վերականգնում։",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=900&q=80",
    date: "Մարաթոն",
    content: "Մարաթոնին նախապատրաստվելիս կարևոր են աստիճանական ծանրաբեռնվածությունը, հանգիստը և անհատական մարզական ծրագիրը։ Մրցումների մասին նյութերում օգտագործիր պաշտոնական արդյունքները։"
  },
  {
    id: 11,
    category: "Ըմբշամարտ",
    title: "Մրցումներից առաջ մարզիկների պատրաստության փուլը",
    description: "Ֆիզիկական և տեխնիկական պատրաստությունը մրցումների կարևոր մասն են։",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    date: "Պատրաստություն",
    content: "Մրցումներից առաջ մարզիկները կենտրոնանում են տեխնիկայի, մարտավարության և վերականգնման վրա։ Իրական հրապարակման համար ավելացրու մարզիկի անունը, մրցաշարի տվյալները և ստուգված աղբյուրները։"
  },
  {
    id: 12,
    category: "Ծանրամարտ",
    title: "Ծանրամարտի մրցումներում կարևոր է յուրաքանչյուր փորձ",
    description: "Մարզիկների արդյունքները կախված են պատրաստությունից և փորձերի ճիշտ ընտրությունից։",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
    date: "Մրցումներ",
    content: "Ծանրամարտում յուրաքանչյուր փորձ պետք է պլանավորվի մարզիկի պատրաստվածության և մրցակցային իրավիճակի հիման վրա։ Իրական արդյունքների համար օգտվիր մրցաշարի պաշտոնական արձանագրություններից։"
  }
];

// ======================================
// DOM ELEMENTS
// ======================================

const newsGrid = document.getElementById("newsGrid");
const filterBar = document.getElementById("filterBar");
const searchInput = document.getElementById("searchInput");
const loadMoreButton = document.getElementById("loadMore");
const emptyState = document.getElementById("emptyState");

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

let selectedCategory = "Բոլորը";
let visibleCount = 6;
const pageSize = 6;

// ======================================
// DATE AND FOOTER YEAR
// ======================================

const currentDateElement = document.getElementById("currentDate");
const yearElement = document.getElementById("year");

const today = new Date();

if (currentDateElement) {
  currentDateElement.textContent = today.toLocaleDateString("hy-AM", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

if (yearElement) {
  yearElement.textContent = today.getFullYear();
}

// ======================================
// SAFE HTML TEXT
// ======================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
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

// ======================================
// FILTER AND SEARCH
// ======================================

function getFilteredNews() {
  const searchTerm = searchInput.value
    .trim()
    .toLocaleLowerCase("hy-AM");

  return newsData.filter((news) => {
    const matchesCategory =
      selectedCategory === "Բոլորը" ||
      news.category === selectedCategory;

    const searchableText = [
      news.title,
      news.description,
      news.category,
      news.content
    ].join(" ").toLocaleLowerCase("hy-AM");

    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

// ======================================
// RENDER NEWS CARDS
// ======================================

function renderNews() {
  const filteredNews = getFilteredNews();
  const visibleNews = filteredNews.slice(0, visibleCount);

  newsGrid.innerHTML = visibleNews.map((news) => `
    <article class="news-card">
      <div class="news-image-wrap">
        <img
          class="news-image"
          src="${escapeHTML(news.image)}"
          alt="${escapeHTML(news.category)}"
          loading="lazy"
          onerror="this.style.display='none'"
        >
        <span class="category-tag">
          ${escapeHTML(news.category)}
        </span>
      </div>

      <div class="news-body">
        <div class="news-meta">
          <span>● ${escapeHTML(news.category)}</span>
          <span>${escapeHTML(news.date)}</span>
        </div>

        <h3 class="news-title">
          ${escapeHTML(news.title)}
        </h3>

        <p class="news-description">
          ${escapeHTML(news.description)}
        </p>

        <button
          class="read-more"
          type="button"
          data-read-id="${news.id}"
          aria-label="Կարդալ՝ ${escapeHTML(news.title)}"
        >
          Կարդալ ավելին <span>→</span>
        </button>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filteredNews.length !== 0;

  loadMoreButton.hidden = filteredNews.length <= visibleCount;

  loadMoreButton.textContent =
    "Դիտել բոլոր նորությունները ↓";
}

// ======================================
// CATEGORY FILTER BUTTONS
// ======================================

function setCategory(category) {
  selectedCategory = category;
  visibleCount = pageSize;

  document.querySelectorAll(".filter-btn").forEach((button) => {
    const isActive = button.dataset.category === category;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderNews();
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button || !filterBar.contains(button)) return;

  setCategory(button.dataset.category);
});

// Sport category cards
document.querySelectorAll(".sport-card").forEach((button) => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);

    document.getElementById("news").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Header category links
document.querySelectorAll("[data-nav-category]").forEach((link) => {
  link.addEventListener("click", () => {
    setCategory(link.dataset.navCategory);
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Search
searchInput.addEventListener("input", () => {
  visibleCount = pageSize;
  renderNews();
});

// Load more
loadMoreButton.addEventListener("click", () => {
  visibleCount += pageSize;
  renderNews();
});

// ======================================
// READ FULL ARTICLE
// ======================================

newsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-read-id]");

  if (!button) return;

  const news = newsData.find(
    (item) => item.id === Number(button.dataset.readId)
  );

  if (!news) return;

  showArticle(news);
});

function showArticle(news) {
  const dialog = document.createElement("dialog");

  dialog.className = "article-dialog";

  const style = document.createElement("style");

  style.textContent = `
    .article-dialog {
      width: min(620px, calc(100% - 30px));
      max-height: 85vh;
      margin: auto;
      padding: 0;
      overflow: auto;
      color: #f5f7fb;
      background: #111720;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 10px;
    }

    .article-dialog::backdrop {
      background: rgba(0,0,0,.82);
      backdrop-filter: blur(5px);
    }

    .article-dialog-content {
      padding: 28px;
    }

    .article-dialog h2 {
      font-size: 24px;
      line-height: 1.5;
      margin: 15px 0;
    }

    .article-dialog p {
      color: #bac4d2;
      font-size: 14px;
      line-height: 2;
      margin-bottom: 20px;
    }

    .article-dialog .article-category {
      color: #ff3548;
      font-size: 11px;
      font-weight: 800;
    }

    .article-dialog .article-close {
      float: right;
      padding: 7px 12px;
      color: white;
      background: #202a37;
      border: 1px solid rgba(255,255,255,.15);
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  dialog.innerHTML = `
    <div class="article-dialog-content">
      <button class="article-close" type="button"
        aria-label="Փակել հոդվածը">✕</button>

      <span class="article-category">
        ${escapeHTML(news.category)}
      </span>

      <h2>${escapeHTML(news.title)}</h2>

      <p>${escapeHTML(news.description)}</p>

      <p>${escapeHTML(news.content)}</p>

      <p><strong>Նշում.</strong> Սա ցուցադրական նյութ է։
      Իրական սպորտային նորությունների համար օգտագործիր
      ստուգված աղբյուրներ և թարմացված հրապարակումներ։</p>
    </div>
  `;

  document.body.appendChild(style);
  document.body.appendChild(dialog);

  function closeDialog() {
    if (dialog.open) dialog.close();

    dialog.remove();
    style.remove();
  }

  dialog.querySelector(".article-close")
    .addEventListener("click", closeDialog);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener("close", () => {
    dialog.remove();
    style.remove();
  }, { once: true });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDialog();
    }
  });

  dialog.showModal();
}

// ======================================
// MOBILE NAVIGATION
// ======================================

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Փակել մենյուն" : "Բացել մենյուն"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});


newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("emailInput");

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  newsletterMessage.textContent =
    "Ձևը լրացված է։ Իրական գրանցման համար անհրաժեշտ է միացնել սերվերը։";

  newsletterForm.reset();
});



renderNews();
