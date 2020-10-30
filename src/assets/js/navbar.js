window.addEventListener("DOMContentLoaded", function (event) {
  // console.log("menu");
  const navbar = document.querySelector('.navbar');
  // console.log(navbar)
  const toggle = document.querySelector('.navbar__toggler.btn--open');
  console.log(toggle)
  toggle.addEventListener('click', function (event) {
    // console.log("open")
    navbar.classList.toggle('active');
  })
});
