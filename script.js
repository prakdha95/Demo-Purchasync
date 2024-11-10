
// Mobile menu handler
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const spinner = document.getElementById('spinner');

menuOpen.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
  overlay.style.display = 'block'
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
  overlay.style.display = 'none'
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
  overlay.style.display = 'none'
});

// Scrolling to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {

    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Message handler
document.getElementById('demo_contact_form').addEventListener('submit', function (event) {
  event.preventDefault();

  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const company = document.getElementById('company').value;
  const contact_desc = document.getElementById('contact_desc').value;
  const business_type = document.getElementById('business_type').value;

  // Store the data in local storage
  localStorage.setItem('first_name', first_name);
  localStorage.setItem('last_name', last_name);
  localStorage.setItem('email', email);
  localStorage.setItem('phone', phone);
  localStorage.setItem('company', company);
  localStorage.setItem('contact_desc', contact_desc);
  localStorage.setItem('business_type', business_type);

  const messageDiv = document.getElementById('submitMessage');
  overlay.style.display = 'block'
  spinner.style.display = 'block'
  setTimeout(() => {
    messageDiv.textContent = `Thank you ${first_name}, for your message submission. We will get in touch with you soon!`;
    this.reset();
    window.scrollY === 0
    overlay.style.display = 'none'
    spinner.style.display = 'none'
    messageDiv.classList.remove('submit_message');
  }, 2000);

  setTimeout(() => {
    messageDiv.style.opacity = '0';
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 500);
  }, 7000);

});


