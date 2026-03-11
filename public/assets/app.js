const EMBEDDED_CONFIG = {
  "siteName": "Nação Capoeira — Oullins / Pierre-Bénite",
  "shortName": "Nação Capoeira Oullins",
  "hostInstitution": "Section rattachée au PLO (Patronage Laïque d'Oullins)",
  "seasonLabel": "Saison 2024-2025 (informations publiques, à confirmer chaque rentrée)",
  "address": "27 rue Diderot, 69600 Oullins",
  "phone": "04 78 51 34 26",
  "email": "capoeira@ploullins.fr",
  "mapQuery": "27 rue Diderot, 69600 Oullins",
  "externalLinks": [
    {
      "label": "Site PLO",
      "url": "https://ploullins.fr/capoeira/"
    },
    {
      "label": "Site historique",
      "url": "https://nacaocapoeira.free.fr"
    }
  ],
  "people": {
    "showSectionLead": true,
    "sectionLead": {
      "name": "Thierry Chossinand",
      "role": "Responsable de section",
      "note": "Coordonnées personnelles potentiellement évolutives.",
      "phone": "06 74 22 99 91"
    },
    "teacher": {
      "name": "Contra Mestre Mamolengo",
      "role": "Encadrement technique"
    }
  },
  "history": [
    {
      "year": "2001",
      "title": "Création de la section",
      "description": "Ouverture de la section capoeira au sein du PLO en septembre 2001."
    },
    {
      "year": "2001-2000s",
      "title": "Transmission initiale",
      "description": "L'enseignement commence avec Mestre Zé Doro et pose des bases solides."
    },
    {
      "year": "Aujourd'hui",
      "title": "Continuité vivante",
      "description": "La section poursuit sa transmission entre pratique corporelle, musique et culture."
    }
  ],
  "schedules": [
    {
      "audience": "Enfants 6–14 ans",
      "level": "Tous niveaux",
      "day": "Vendredi",
      "time": "18h00–19h00",
      "location": "Gymnase Jean Macé"
    },
    {
      "audience": "Ados / Adultes",
      "level": "Débutants",
      "day": "Mardi",
      "time": "18h30–20h00",
      "location": "Gymnase Jean Macé"
    },
    {
      "audience": "Ados / Adultes",
      "level": "Débutants",
      "day": "Jeudi",
      "time": "18h30–20h00",
      "location": "Gymnase Jean Macé"
    },
    {
      "audience": "Ados / Adultes",
      "level": "Confirmés",
      "day": "Mardi",
      "time": "20h00–21h30",
      "location": "Gymnase Jean Macé"
    },
    {
      "audience": "Ados / Adultes",
      "level": "Confirmés",
      "day": "Jeudi",
      "time": "20h00–21h30",
      "location": "Gymnase Jean Macé"
    }
  ],
  "prices": [
    {
      "label": "Enfants 6–14 ans",
      "price": "110 €"
    },
    {
      "label": "Ados 15–17 ans",
      "price": "200 €"
    },
    {
      "label": "Adultes 18+",
      "price": "260 €"
    }
  ],
  "fees": [
    "Licence / adhésion mineurs : 36 € OPB / 39 € hors OPB",
    "Licence / adhésion majeurs : 47 € OPB / 50 € hors OPB"
  ],
  "faq": [
    {
      "q": "Puis-je venir essayer sans expérience ?",
      "a": "Oui. Les cours débutants sont conçus pour découvrir la capoeira en sécurité, progressivement."
    },
    {
      "q": "À partir de quel âge ?",
      "a": "L'accueil se fait à partir de 6 ans, avec des formats adaptés selon les âges."
    },
    {
      "q": "Que faut-il prévoir pour le premier cours ?",
      "a": "Une tenue de sport souple, de l'eau, et l'envie d'apprendre dans un cadre collectif bienveillant."
    }
  ],
  "tagline": "Capoeira martiale, musicale et culturelle à Oullins / Pierre-Bénite.",
  "heroTitle": "Nação Capoeira<br>Oullins / Pierre-Bénite",
  "heroSubtitle": "Une école de capoeira vivante, rigoureuse et chaleureuse, rattachée au PLO. Cours structurés dès 6 ans, ados et adultes.",
  "heroAsset": "public/assets/images/hero-roda.jpg",
  "galleryAssets": [
    "public/assets/images/gallery-01.jpg"
  ],
  "ogImage": "public/assets/images/og-image.jpg",
  "brand": {
    "logoMain": "public/assets/brand/logo-main.png"
  },
  "cta": {
    "primary": "Réserver un essai",
    "secondary": "Voir les horaires"
  },
  "socialLinks": []
};

async function loadConfig() {
  if (window.__SITE_CONFIG__) return window.__SITE_CONFIG__;

  const inlineConfigTag = document.getElementById('site-config');
  if (inlineConfigTag?.textContent?.trim()) {
    try {
      return JSON.parse(inlineConfigTag.textContent);
    } catch (_) {
      // ignore and continue fallback chain
    }
  }

  const isFileProtocol = window.location.protocol === 'file:';
  if (isFileProtocol) {
    return EMBEDDED_CONFIG;
  }

  const scriptSrc = document.currentScript?.src || Array.from(document.scripts).find((x) => x.src.includes('/public/assets/app.js'))?.src || '';
  const baseUrl = scriptSrc ? new URL('../../site.config.json', scriptSrc) : new URL('site.config.json', window.location.href);
  const fallbackUrl = new URL('/site.config.json', window.location.origin);

  try {
    const response = await fetch(baseUrl);
    if (response.ok) return response.json();
  } catch (_) {
    // fallback below
  }

  try {
    const fallbackResponse = await fetch(fallbackUrl);
    if (fallbackResponse.ok) return fallbackResponse.json();
  } catch (_) {
    // fallback below
  }

  return EMBEDDED_CONFIG;
}


function createOgPlaceholderDataUri(label) {
  const safeLabel = String(label || 'Nação Capoeira').replace(/[<>&]/g, '');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#0b1930"/><stop offset="1" stop-color="#123a78"/></linearGradient></defs><rect width="1200" height="630" fill="#f6f3ee"/><rect x="54" y="54" width="1092" height="522" rx="38" fill="url(#g)"/><circle cx="972" cy="164" r="130" fill="#d8b63c" fill-opacity="0.17"/><text x="120" y="300" fill="#fffdf8" font-family="Inter,Arial,sans-serif" font-size="62" font-weight="700">${safeLabel}</text><text x="120" y="368" fill="#d8b63c" font-family="Inter,Arial,sans-serif" font-size="30">Oullins / Pierre-Bénite · Section PLO</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setMeta(config, title, description) {
  const fullTitle = `${title} | ${config.siteName}`;
  const ensureMeta = (selector, attrs) => {
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement('meta');
      Object.entries(attrs).forEach(([k, v]) => tag.setAttribute(k, v));
      document.head.appendChild(tag);
    }
    return tag;
  };

  document.title = fullTitle;
  ensureMeta('meta[name="description"]', { name: 'description' }).setAttribute('content', description);
  ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', fullTitle);
  ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description);
  ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', 'website');
  const ogImage = config.ogImage || 'public/assets/images/og-image.jpg';
  ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', ogImage);
}

function renderShell(config) {
  const nav = document.getElementById('site-nav');
  const footer = document.getElementById('site-footer');
  const floatCta = document.getElementById('float-cta');
  const pathname = location.pathname.split('/').pop() || 'index.html';

  const links = [
    ['index.html', 'Accueil'],
    ['cours-tarifs.html', 'Cours & Tarifs'],
    ['ecole.html', "L'école"],
    ['galerie.html', 'Galerie'],
    ['contact.html', 'Contact']
  ];

  nav.innerHTML = `
    <div class="container nav-shell">
      <a class="brand" href="index.html" aria-label="Retour à l'accueil">
        ${config?.brand?.logoMain ? `<img class="brand-logo" src="${config.brand.logoMain}" alt="Logo ${config.shortName}">` : `<span class="brand-mark" aria-hidden="true">NC</span>`}
        <span>
          <span class="brand-title">${config.shortName}</span>
          <small class="brand-subtitle">${config.hostInstitution}</small>
        </span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobilePanel" aria-label="Ouvrir le menu">☰</button>
      <nav class="nav-links" aria-label="Navigation principale">
        ${links.map(([href, label]) => `<a class="nav-link ${pathname === href ? 'active' : ''}" href="${href}">${label}</a>`).join('')}
        <a class="nav-cta" href="contact.html">Essai</a>
      </nav>
    </div>
    <aside id="mobilePanel" class="mobile-panel" aria-hidden="true">
      <div class="mobile-head">
        <strong>${config.shortName}</strong>
        <button class="mobile-close" id="mobileClose" aria-label="Fermer le menu">✕</button>
      </div>
      <nav class="mobile-nav">
        ${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
      <div class="mobile-actions">
        <a href="tel:${config.phone.replace(/\s+/g, '')}">Appeler</a>
        <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapQuery)}">Itinéraire</a>
        <a href="contact.html">Contact direct</a>
      </div>
    </aside>
  `;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3>${config.siteName}</h3>
          <p class="small">${config.tagline || 'Capoeira martiale, musicale et culturelle à Oullins / Pierre-Bénite.'}</p>
        </div>
        <div>
          <h3>Coordonnées</h3>
          <p class="small">${config.address}<br><a href="tel:${config.phone.replace(/\s+/g, '')}">${config.phone}</a><br><a href="mailto:${config.email}">${config.email}</a></p>
        </div>
        <div>
          <h3>Liens utiles</h3>
          <div class="footer-links">
            <a href="cours-tarifs.html">Horaires & tarifs</a>
            <a href="contact.html">Venir essayer</a>
            <a href="mentions-legales.html">Mentions légales</a>
            <a href="politique-confidentialite.html">Confidentialité</a>
          </div>
        </div>
      </div>
      <p class="footer-note">${config.seasonLabel} · ${config.hostInstitution}</p>
    </div>
  `;

  floatCta.innerHTML = `
    <a href="tel:${config.phone.replace(/\s+/g, '')}">Appeler</a>
    <a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapQuery)}">Itinéraire</a>
    <a href="contact.html">Essai</a>
  `;

  const openMenu = () => {
    document.body.classList.add('menu-open');
    document.getElementById('navToggle')?.setAttribute('aria-expanded', 'true');
    document.getElementById('mobilePanel')?.setAttribute('aria-hidden', 'false');
  };
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    document.getElementById('navToggle')?.setAttribute('aria-expanded', 'false');
    document.getElementById('mobilePanel')?.setAttribute('aria-hidden', 'true');
  };

  document.getElementById('navToggle')?.addEventListener('click', openMenu);
  document.getElementById('mobileClose')?.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-nav a, .mobile-actions a').forEach((el) => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function injectStructuredData(config) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: config.siteName,
    description: config.tagline,
    address: config.address,
    telephone: config.phone,
    email: config.email,
    url: location.origin,
    sameAs: (config.externalLinks || []).map((x) => x.url)
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function initRevealAnimations() {
  const items = document.querySelectorAll('.reveal');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  items.forEach((el) => observer.observe(el));
}

window.site = { loadConfig, setMeta, renderShell, injectStructuredData, initRevealAnimations };
