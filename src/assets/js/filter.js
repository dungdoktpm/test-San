(function () {
  'use-strict';

  function init() {
    (function filter(item) {
      let eles = document.querySelectorAll(item);
      console.log(eles);
      let section = document.querySelectorAll(".filter__item");
      console.log(section);
      eles.forEach(e => {
        e.addEventListener("click", () => {
          //active li click
          eles.forEach(e => {
            e.classList.remove("active");
          });
          e.classList.add("active");
          //show image
          let value = e.getAttribute("data-filter");
          section.forEach(show => {
            show.style.display = "none";
            if (show.getAttribute("data-category") == value || value == "all") {
              show.style.display = "block";
            }
          });
        });
      });

    })(".filter-nav__item");

  }

  window.addEventListener('load', init);
})();
