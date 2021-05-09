// Makes nav links close the navbar toggle

let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = new bootstrap.Collapse(document.getElementById('nav-collapse'), {
  toggle: false
});

for (link of navLinks) {
  link.addEventListener('click', () => {
    navCollapse.hide()
  });
}
