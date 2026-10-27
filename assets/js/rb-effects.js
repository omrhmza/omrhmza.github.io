/* React Bits-style effects, ported to vanilla JS for the Jekyll site (2026-10-27).
   1) Aurora: a slow-drifting glow layer behind the glass panels.
   2) Scroll Reveal: cards and content blocks blur/rise into view.
   Respects prefers-reduced-motion; without JS everything stays visible. */
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Aurora layer --- */
  if (!reduceMotion) {
    var aurora = document.createElement("div");
    aurora.className = "rb-aurora";
    aurora.setAttribute("aria-hidden", "true");
    document.body.insertBefore(aurora, document.body.firstChild);
  }

  /* --- Scroll Reveal --- */
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll(
    ".archive__item, .home-actions-grid .btn, .page__content > p, .page__content > h2, .page__content > h3, .page__content > blockquote, .feature__item"
  );
  if (!targets.length) return;

  targets.forEach(function (el, i) {
    el.classList.add("rb-reveal");
    el.style.transitionDelay = (i % 4) * 60 + "ms";
  });

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("rb-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  targets.forEach(function (el) { io.observe(el); });

  /* Safety net: never leave content hidden. */
  setTimeout(function () {
    targets.forEach(function (el) { el.classList.add("rb-in"); });
  }, 2500);
})();
