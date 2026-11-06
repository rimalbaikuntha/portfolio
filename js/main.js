(function () {
  document.documentElement.classList.add('js');

  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }

  // Gentle reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form
  var form = document.getElementById('contact-form');
  if (form) {
    var status = document.getElementById('form-status');
    var submit = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      status.className = 'form-status';
      status.textContent = '';
      submit.disabled = true;
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      fetch('contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
        .then(function (res) {
          if (res.ok && res.body.success) {
            status.className = 'form-status ok';
            status.textContent = 'Thank you. Your message has been received and I will reply personally.';
            form.reset();
          } else {
            throw new Error(res.body.error || 'failed');
          }
        })
        .catch(function () {
          status.className = 'form-status err';
          status.textContent = 'Sorry, the message could not be sent. Please try again, or reach me on LinkedIn.';
        })
        .finally(function () { submit.disabled = false; });
    });
  }
})();
