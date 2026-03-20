/* Shared Navigation & Footer HTML injected into every page */

const NAV_HTML = `
<header id="header">
  <div class="container header-inner">
    <!-- Logo -->
    <a href="index.html" class="logo logo-wrap">
      <img src="img/logo.png" alt="Lauenburg & Kollegen – Ihr Anwalt Hamburg" width="200" height="60">
      <span class="logo-names">Lauenburg&nbsp;|&nbsp;Kopietz&nbsp;|&nbsp;Herzog&nbsp;|&nbsp;Hoffmann&nbsp;|&nbsp;De&nbsp;Groot</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="nav-desktop" aria-label="Hauptnavigation">

      <div class="nav-item">
        <button class="nav-link">Kanzlei <span class="nav-chevron">▾</span></button>
        <div class="dropdown">
          <a href="ueber-uns.html">Über Uns</a>
          <a href="kosten.html">Kosten & Honorar</a>
          <a href="tipps.html">Tipps im Strafrecht</a>
          <a href="mitgliedschaften.html">Mitgliedschaften</a>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-link">Strafrecht <span class="nav-chevron">▾</span></button>
        <div class="dropdown">
          <a href="strafrecht.html">Strafverteidigung im Strafverfahren</a>
          <a href="strafrecht.html#az">Straftaten und Bußgelder A–Z</a>
          <a href="strafrecht.html#wirtschaft">Wirtschaftsstrafrecht</a>
          <a href="strafrecht.html#vorladung">Vorladung durch die Polizei</a>
          <a href="strafrecht.html#durchsuchung">Durchsuchung / Beschlagnahme</a>
          <a href="strafrecht.html#festnahme">Festnahme / Verhaftung</a>
          <a href="strafrecht.html#strafbefehl">Strafbefehl – Einspruch</a>
          <a href="strafrecht.html#pflicht">Pflichtverteidigung</a>
          <a href="blog.html">Rechtsprechung</a>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-link">Rechtsgebiete <span class="nav-chevron">▾</span></button>
        <div class="dropdown">
          <a href="familienrecht.html">Familienrecht</a>
          <a href="zivilrecht.html">Allgemeines Zivilrecht</a>
        </div>
      </div>

      <a href="blog.html" class="nav-link">Blog</a>

      <div class="nav-item">
        <button class="nav-link">Anwälte <span class="nav-chevron">▾</span></button>
        <div class="dropdown">
          <a href="joachim-lauenburg.html">Fachanwalt Joachim Lauenburg</a>
          <a href="tristan-kopietz.html">Rechtsanwalt Tristan Kopietz</a>
          <a href="jessica-lauenburg.html">Fachanwältin Jessica Lauenburg</a>
          <a href="rene-herzog.html">Fachanwalt René Herzog</a>
          <a href="anna-hoffmann.html">Fachanwältin Anna Hoffmann</a>
          <a href="jana-de-groot.html">Rechtsanwältin Jana De Groot</a>
          <a href="horst-guenter-lauenburg.html">RA Horst-Günther Lauenburg</a>
          <a href="dorothea-lauenburg.html">RAin Dr. Dorothea Lauenburg</a>
        </div>
      </div>

      <div class="nav-item">
        <button class="nav-link">Kontakt <span class="nav-chevron">▾</span></button>
        <div class="dropdown">
          <a href="termin.html">Termin vereinbaren</a>
          <a href="formulare.html">Formulare</a>
          <a href="impressum.html">Impressum</a>
        </div>
      </div>

      <a href="termin.html" class="btn btn-primary header-cta">Termin vereinbaren</a>
    </nav>

    <!-- Hamburger -->
    <button class="hamburger" aria-label="Menü öffnen">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- Mobile Menu -->
<div class="mobile-menu" role="dialog" aria-label="Navigation">
  <div class="mobile-menu-header">
    <a href="index.html"><img src="img/logo.png" alt="Lauenburg & Kollegen" width="160"></a>
    <button class="close-btn" aria-label="Menü schließen">✕</button>
  </div>
  <nav class="mobile-nav">
    <div class="mobile-nav-item">
      <button class="mobile-nav-link mobile-nav-toggle">Kanzlei <span class="mobile-chevron">▾</span></button>
      <div class="mobile-sub">
        <a href="ueber-uns.html">Über Uns</a>
        <a href="kosten.html">Kosten & Honorar</a>
        <a href="tipps.html">Tipps im Strafrecht</a>
        <a href="mitgliedschaften.html">Mitgliedschaften</a>
      </div>
    </div>
    <div class="mobile-nav-item">
      <button class="mobile-nav-link mobile-nav-toggle">Strafrecht <span class="mobile-chevron">▾</span></button>
      <div class="mobile-sub">
        <a href="strafrecht.html">Strafverteidigung</a>
        <a href="strafrecht.html#az">Straftaten A–Z</a>
        <a href="strafrecht.html#wirtschaft">Wirtschaftsstrafrecht</a>
        <a href="strafrecht.html#vorladung">Vorladung durch die Polizei</a>
        <a href="strafrecht.html#durchsuchung">Durchsuchung</a>
        <a href="tipps.html">Tipps & Ratgeber</a>
      </div>
    </div>
    <div class="mobile-nav-item">
      <button class="mobile-nav-link mobile-nav-toggle">Rechtsgebiete <span class="mobile-chevron">▾</span></button>
      <div class="mobile-sub">
        <a href="familienrecht.html">Familienrecht</a>
        <a href="zivilrecht.html">Zivilrecht</a>
      </div>
    </div>
    <div class="mobile-nav-item">
      <a href="blog.html" class="mobile-nav-link">Blog</a>
    </div>
    <div class="mobile-nav-item">
      <button class="mobile-nav-link mobile-nav-toggle">Anwälte <span class="mobile-chevron">▾</span></button>
      <div class="mobile-sub">
        <a href="joachim-lauenburg.html">Joachim Lauenburg</a>
        <a href="tristan-kopietz.html">Tristan Kopietz</a>
        <a href="jessica-lauenburg.html">Jessica Lauenburg</a>
        <a href="rene-herzog.html">René Herzog</a>
        <a href="anna-hoffmann.html">Anna Hoffmann</a>
        <a href="jana-de-groot.html">Jana De Groot</a>
        <a href="horst-guenter-lauenburg.html">Horst-Günther Lauenburg</a>
        <a href="dorothea-lauenburg.html">Dr. Dorothea Lauenburg</a>
      </div>
    </div>
    <div class="mobile-nav-item">
      <button class="mobile-nav-link mobile-nav-toggle">Kontakt <span class="mobile-chevron">▾</span></button>
      <div class="mobile-sub">
        <a href="termin.html">Termin vereinbaren</a>
        <a href="formulare.html">Formulare</a>
        <a href="impressum.html">Impressum</a>
      </div>
    </div>
  </nav>
  <div class="mobile-contact">
    <a href="termin.html" class="btn btn-gold">Termin vereinbaren</a>
    <p>Kontakt</p>
    <a href="tel:+49400000000">+49 40 000 000 00</a>
    <small>info@ihr-anwalt-hamburg.de</small>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-logo">
            <a href="index.html"><img src="img/logo.png" alt="Lauenburg & Kollegen" width="180"></a>
            <p class="footer-logo-names">Lauenburg&nbsp;·&nbsp;Kopietz&nbsp;·&nbsp;Herzog&nbsp;·&nbsp;Hoffmann&nbsp;·&nbsp;De&nbsp;Groot</p>
          </div>
          <p class="footer-tagline">Ihr erfahrener Rechtsanwalt für Strafrecht und Familienrecht in Hamburg. Diskret. Kompetent. Entschieden.</p>
          <span class="gold-rule mb-6"></span>
          <div style="margin-top:1.5rem">
            <div class="footer-contact-line"><a href="tel:+49400000000">+49 40 000 000 00</a></div>
            <div class="footer-contact-line"><a href="mailto:info@ihr-anwalt-hamburg.de">info@ihr-anwalt-hamburg.de</a></div>
            <div class="footer-contact-line">Winterhuder Weg 6, 22085 Hamburg</div>
          </div>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Kanzlei</p>
          <ul class="footer-links">
            <li><a href="ueber-uns.html">Über Uns</a></li>
            <li><a href="kosten.html">Kosten & Honorar</a></li>
            <li><a href="tipps.html">Tipps im Strafrecht</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="termin.html">Termin vereinbaren</a></li>
            <li><a href="formulare.html">Formulare</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Rechtsgebiete</p>
          <ul class="footer-links">
            <li><a href="strafrecht.html">Strafverteidigung</a></li>
            <li><a href="strafrecht.html#wirtschaft">Wirtschaftsstrafrecht</a></li>
            <li><a href="strafrecht.html#vorladung">Vorladung</a></li>
            <li><a href="strafrecht.html#durchsuchung">Durchsuchung</a></li>
            <li><a href="familienrecht.html">Familienrecht</a></li>
            <li><a href="zivilrecht.html">Zivilrecht</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Unsere Anwälte</p>
          <ul class="footer-links">
            <li><a href="joachim-lauenburg.html">Joachim Lauenburg</a></li>
            <li><a href="jessica-lauenburg.html">Jessica Lauenburg</a></li>
            <li><a href="rene-herzog.html">René Herzog</a></li>
            <li><a href="anna-hoffmann.html">Anna Hoffmann</a></li>
            <li><a href="tristan-kopietz.html">Tristan Kopietz</a></li>
            <li><a href="jana-de-groot.html">Jana De Groot</a></li>
            <li><a href="horst-guenter-lauenburg.html">H.-G. Lauenburg</a></li>
            <li><a href="dorothea-lauenburg.html">Dr. D. Lauenburg</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Full-width map -->
  <div class="footer-map-wrap">
    <iframe
      class="footer-map"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.487!2d10.0198!3d53.5714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f6b6c5b4c73%3A0x1!2sWinterhuder+Weg+6%2C+22085+Hamburg!5e0!3m2!1sde!2sde!4v1700000000000"
    ></iframe>
  </div>
  <div class="container footer-bar">
    <p class="footer-copy">© ${new Date().getFullYear()} Lauenburg & Kollegen Rechtsanwälte. Alle Rechte vorbehalten.</p>
    <div class="footer-legal">
      <a href="impressum.html">Impressum</a>
      <a href="datenschutz.html">Datenschutz</a>
      <a href="termin.html">Kontakt</a>
    </div>
  </div>
</footer>
`;

// Inject nav and footer
document.getElementById('nav-placeholder')?.insertAdjacentHTML('afterend', NAV_HTML);
document.getElementById('footer-placeholder')?.insertAdjacentHTML('beforebegin', FOOTER_HTML);
