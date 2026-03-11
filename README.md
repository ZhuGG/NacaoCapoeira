# Nação Capoeira — Oullins / Pierre-Bénite

Site vitrine premium pour la section capoeira rattachée au **PLO (Patronage Laïque d'Oullins)**.

## Note technique

Le brief demandait idéalement Next.js + TypeScript + Tailwind. Dans cet environnement, l'installation npm est bloquée (registry inaccessible), donc la livraison est faite en **site statique HTML/CSS/JS maintenable** pour garantir un résultat complet, exploitable immédiatement.

## Installation / lancement

Aucune dépendance requise.

```bash
python3 -m http.server 4173
```

Puis ouvrir : `http://localhost:4173`.

## Structure

- `index.html` : accueil
- `cours-tarifs.html` : horaires, tarifs, FAQ
- `ecole.html` : histoire, pédagogie, encadrement
- `galerie.html` : temps forts (placeholders)
- `contact.html` : coordonnées + formulaire prêt à brancher
- `mentions-legales.html`, `politique-confidentialite.html`
- `site.config.json` : **toutes les données éditables** (coordonnées, horaires, tarifs, personnes, FAQ)
- `public/assets/styles.css` : direction artistique globale
- `public/assets/app.js` : shell commun (navigation, footer, JSON-LD, CTA mobiles)

## Modifier les contenus

Éditer `site.config.json`:
- informations générales (`address`, `phone`, `email`)
- horaires (`schedules`)
- tarifs (`prices`, `fees`)
- contacts individuels (`people.showSectionLead` pour masquer rapidement)
- frise historique (`history`)

## Formulaire

Le formulaire de `contact.html` est prêt côté UX, avec validation HTML native et état de confirmation.
Brancher l'envoi réel via :
- Formspree
- endpoint serveur
- service SMTP/API

## SEO / accessibilité intégrés

- métadonnées page par page
- Open Graph
- JSON-LD (SportsActivityLocation)
- `robots.txt` et `sitemap.xml`
- contraste lisible, structure sémantique, responsive mobile
- respect de `prefers-reduced-motion`
