$(document).ready(function () {
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#main-nav");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  const btns = document.querySelectorAll("#main-nav ul li a");

  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (e.target.classList.contains("current")) {
        return;
      } else {
        btns.forEach((btn) => btn.classList.remove("current"));
        e.target.classList.add("current");
      }
    });
  });
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

const revealSections = function (entires) {
  const [entry] = entires;

  const currentSection = entry.target;
  const isIntersection = entry.isIntersecting;

  if (!isIntersection) return;
  currentSection.classList.remove("hide");

  observer.unobserve(currentSection);
};

const options = {
  root: null,
  threshold: 0.15,
};
const observer = new IntersectionObserver(revealSections, options);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
  section.classList.add("hide");
});
