/* ============================================================
   PINNACLE CHIROPRACTIC — Shared Layout Components
   Nav + Footer injected on every page
   ============================================================ */

// ---- NAV ----
const NAV_HTML = `
<header class="site-header">
  <div class="container header-inner">

    <a href="/index.html" class="site-logo" aria-label="Pinnacle Chiropractic home">
      <span class="wordmark">Pinnacle Chiropractic</span>
      <span class="tagline">Clinton Township, MI</span>
    </a>

    <nav class="site-nav" id="site-nav" aria-label="Main navigation">
      <ul class="nav-links">

        <li><a href="/index.html">Home</a></li>

        <li class="nav-dropdown">
          <a href="/pages/services.html" aria-haspopup="true">Services</a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="/pages/condition-low-back.html">Low Back Pain &amp; Sciatica</a></li>
            <li><a href="/pages/condition-neck.html">Neck Pain &amp; Headaches</a></li>
            <li><a href="/pages/condition-sports.html">Sports Injury</a></li>
            <li><a href="/pages/condition-prenatal.html">Prenatal / Webster Technique</a></li>
            <li><a href="/pages/services.html">All Services</a></li>
          </ul>
        </li>

        <li><a href="/pages/new-patient.html">New Patients</a></li>
        <li><a href="/pages/blog.html">Blog</a></li>
        <li><a href="/pages/about.html">About</a></li>
        <li><a href="/pages/contact.html">Contact</a></li>

        <li>
          <a href="https://pinnaclechiro.janeapp.com" class="nav-cta" target="_blank" rel="noopener">
            Book Now
          </a>
        </li>

      </ul>

      <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>

  </div>
</header>
`;

// ---- FOOTER ----
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">

      <div class="footer-brand">
        <div class="wordmark">Pinnacle Chiropractic</div>
        <p>Hands-on chiropractic care for athletes, families, and everyone in between — rooted in Macomb County.</p>
        <address class="footer-address">
          19199 15 Mile Rd<br>
          Clinton Township, MI 48035<br>
          <a href="tel:5865550100">(586) 555-0100</a>
        </address>
      </div>

      <div class="footer-col">
        <h4>Care</h4>
        <ul>
          <li><a href="/pages/condition-low-back.html">Low Back Pain</a></li>
          <li><a href="/pages/condition-neck.html">Neck Pain</a></li>
          <li><a href="/pages/condition-sports.html">Sports Injury</a></li>
          <li><a href="/pages/condition-prenatal.html">Prenatal Care</a></li>
          <li><a href="/pages/services.html">All Services</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Practice</h4>
        <ul>
          <li><a href="/pages/about.html">About Dr. Pinnacle</a></li>
          <li><a href="/pages/new-patient.html">New Patients</a></li>
          <li><a href="/pages/blog.html">Blog</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Hours</h4>
        <ul>
          <li style="color:var(--slate-light);font-size:var(--text-sm)">Mon &amp; Wed: 9am – 6pm</li>
          <li style="color:var(--slate-light);font-size:var(--text-sm)">Tue &amp; Thu: 11am – 7pm</li>
          <li style="color:var(--slate-light);font-size:var(--text-sm)">Friday: 9am – 1pm</li>
          <li style="color:var(--slate-light);font-size:var(--text-sm)">Sat – Sun: Closed</li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <span>&copy; 2026 Pinnacle Chiropractic, LLC. All rights reserved.</span>
      <span>
        <a href="/pages/privacy.html">Privacy Policy</a>
        &nbsp;&middot;&nbsp;
        <a href="/pages/hipaa.html">HIPAA Notice</a>
        &nbsp;&middot;&nbsp;
        <a href="https://pinnaclechiro.janeapp.com" target="_blank" rel="noopener">Book Online</a>
      </span>
    </div>
  </div>
</footer>
`;

// ---- INJECT + INIT ----
document.addEventListener('DOMContentLoaded', () => {

  // Inject nav before first element
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Highlight active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

});
