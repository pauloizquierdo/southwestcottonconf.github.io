// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Simple search filter for presentations / posters
  var input = document.querySelector("[data-filter]");
  if (input) {
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      document.querySelectorAll(".item").forEach(function (el) {
        el.style.display = el.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none";
      });
    });
  }
});
