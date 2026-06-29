/* ============ DJ SZAMBIARZ — interakcje ============ */
(function () {
  'use strict';

  /* ---- Rok w stopce ---- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- Menu mobilne ---- */
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Przycisk "do góry" ---- */
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', function () {
    toTop.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });

  /* ---- Liczniki w sekcji statystyk ---- */
  function animateCount(el) {
    const target = +el.dataset.target;
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('pl-PL');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        animateCount(e.target);
        statObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat__num').forEach(function (el) { statObserver.observe(el); });

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll(
    '.card, .review, .about__media, .about__text, .player, .genres, .section__head'
  );
  revealEls.forEach(function (el) { el.classList.add('reveal'); });
  const revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { revealObs.observe(el); });

  /* ---- Demo odtwarzacz (symulacja paska postępu) ---- */
  const playBtn = document.getElementById('playBtn');
  const fill = document.getElementById('progressFill');
  const timeEl = document.getElementById('trackTime');
  const TOTAL = 210; // 3:30 w sekundach
  let playing = false, elapsed = 0, timer = null;

  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return m + ':' + sec;
  }
  function render() {
    fill.style.width = (elapsed / TOTAL * 100) + '%';
    timeEl.textContent = fmt(elapsed) + ' / ' + fmt(TOTAL);
  }
  if (playBtn) {
    playBtn.addEventListener('click', function () {
      playing = !playing;
      playBtn.textContent = playing ? '❚❚' : '▶';
      if (playing) {
        timer = setInterval(function () {
          elapsed += 1;
          if (elapsed >= TOTAL) { elapsed = 0; playing = false; playBtn.textContent = '▶'; clearInterval(timer); }
          render();
        }, 1000);
      } else {
        clearInterval(timer);
      }
    });
  }

  /* ---- Walidacja i obsługa formularza (front-end demo) ---- */
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = 'form__status';
      const name = form.name;
      const phone = form.phone;
      let valid = true;

      [name, phone].forEach(function (f) {
        if (!f.value.trim()) { f.classList.add('invalid'); valid = false; }
        else { f.classList.remove('invalid'); }
      });

      const phoneOk = /[\d+][\d\s-]{7,}/.test(phone.value);
      if (phone.value && !phoneOk) { phone.classList.add('invalid'); valid = false; }

      if (!valid) {
        status.textContent = 'Uzupełnij imię i poprawny numer telefonu.';
        status.classList.add('err');
        return;
      }

      // Bez backendu: budujemy wiadomość e-mail i otwieramy program pocztowy
      // użytkownika z gotowym zapytaniem skierowanym na adres DJ-a.
      const RECIPIENT = 'djszambiarz@gmail.com';
      const type = form.type.value || '(nie podano)';
      const date = form.date.value || '(nie podano)';
      const msg = form.message.value.trim() || '(brak)';

      const subject = 'Zapytanie o termin — ' + form.name.value.trim();
      const body =
        'Imię i nazwisko: ' + form.name.value.trim() + '\n' +
        'Telefon: ' + form.phone.value.trim() + '\n' +
        'Data imprezy: ' + date + '\n' +
        'Rodzaj imprezy: ' + type + '\n\n' +
        'Wiadomość:\n' + msg + '\n';

      const mailto = 'mailto:' + RECIPIENT +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      // Otwieramy klienta poczty (nowa karta jako bezpieczny fallback).
      window.location.href = mailto;

      status.textContent = 'Otwieram Twój program pocztowy z gotową wiadomością — wystarczy ją wysłać 🎧';
      status.classList.add('ok');
      form.reset();
    });
  }
})();
