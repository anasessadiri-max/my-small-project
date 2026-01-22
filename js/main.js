// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// FAQ toggle
document.querySelectorAll('.faq h3').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer) {
      answer.style.display =
        answer.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// Auto update year in footer
const yearElement = document.querySelector('.site-footer span');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
