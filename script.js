// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Phone mockup: pick a time slot and confirm
const slots = document.getElementById('slots');
const confirmBtn = document.getElementById('confirm');
const phoneMsg = document.getElementById('phone-msg');
let selectedTime = null;

slots.addEventListener('click', (e) => {
  const slot = e.target.closest('.slot');
  if (!slot || slot.disabled) return;

  slots.querySelectorAll('.slot').forEach((s) => s.classList.remove('selected'));
  slot.classList.add('selected');
  selectedTime = slot.textContent;

  confirmBtn.disabled = false;
  confirmBtn.textContent = `Book ${selectedTime}`;
  phoneMsg.textContent = '';
});

confirmBtn.addEventListener('click', () => {
  if (!selectedTime) return;
  phoneMsg.textContent = `Booked with Marco at ${selectedTime}. See you then!`;
  confirmBtn.disabled = true;
  confirmBtn.textContent = 'Booked';
});

// Waitlist form
const form = document.getElementById('waitlist-form');
const emailInput = document.getElementById('email');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  formMsg.className = 'form-msg';
  emailInput.classList.toggle('invalid', !valid);

  if (!valid) {
    formMsg.textContent = 'Enter a valid email address, like you@example.com.';
    formMsg.classList.add('error');
    return;
  }

  // TODO: send `email` to your backend or a service like Formspree / Mailchimp
  formMsg.textContent = "You're on the list. We'll email you on launch day.";
  formMsg.classList.add('success');
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
