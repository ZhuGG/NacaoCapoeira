async function loadConfig() {
  const response = await fetch('/site.config.json');
  return response.json();
}

function setMeta(config, title, description) {
  document.title = `${title} | ${config.siteName}`;
  document.querySelector('meta[name="description"]').setAttribute('content', description);
  document.querySelector('meta[property="og:title"]').setAttribute('content', document.title);
  document.querySelector('meta[property="og:description"]').setAttribute('content', description);
}

function renderShell(config) {
  const nav = document.getElementById('site-nav');
  const footer = document.getElementById('site-footer');
  const pathname = location.pathname.split('/').pop() || 'index.html';
  const links = [
    ['index.html', 'Accueil'],
    ['cours-tarifs.html', 'Cours & Tarifs'],
    ['ecole.html', "Le Club / L'école"],
    ['galerie.html', 'Galerie'],
    ['contact.html', 'Contact']
  ];

  nav.innerHTML = `
  <div class="container nav">
    <a class="brand" href="index.html"><img src="public/assets/logo-nacao.svg" alt="Logo Nação Capoeira" /><span>${config.shortName}<small>${config.hostInstitution}</small></span></a>
    <div class="nav-links">
      ${links.map(([href, label]) => `<a href="${href}" class="${pathname === href ? 'active' : ''}">${label}</a>`).join('')}
    </div>
  </div>`;

  footer.innerHTML = `
  <div class="container">
    <strong>${config.siteName}</strong>
    <p>${config.hostInstitution}<br>${config.address}</p>
    <p>
      <a href="tel:${config.phone.replace(/\s+/g, '')}">${config.phone}</a> ·
      <a href="mailto:${config.email}">${config.email}</a>
    </p>
    <p class="small">Informations horaires/tarifs affichées : ${config.seasonLabel}</p>
    <p class="small"><a href="mentions-legales.html">Mentions légales</a> · <a href="politique-confidentialite.html">Politique de confidentialité</a></p>
  </div>`;

  const fc = document.getElementById('float-cta');
  fc.innerHTML = `
    <a href="tel:${config.phone.replace(/\s+/g, '')}">Appeler</a>
    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.mapQuery)}" target="_blank" rel="noopener">Itinéraire</a>
    <a href="contact.html">Contact</a>
  `;
}

function injectStructuredData(config) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: config.siteName,
    address: config.address,
    telephone: config.phone,
    url: location.origin,
    sameAs: config.externalLinks.map((x) => x.url)
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

window.site = { loadConfig, setMeta, renderShell, injectStructuredData };
