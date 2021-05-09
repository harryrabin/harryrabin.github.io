let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = new bootstrap.Collapse(document.querySelector('#nav-collapse'), {
  toggle: false
});
for (link of navLinks) {
  link.addEventListener('click', () => {navCollapse.hide()});
}
