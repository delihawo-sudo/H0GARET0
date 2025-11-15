document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const mensaje = document.getElementById('formMessage');
  mensaje.textContent = 'Gracias por tu mensaje. Nos pondremos en contacto pronto.';
  mensaje.style.color = 'green';
  this.reset();
});
