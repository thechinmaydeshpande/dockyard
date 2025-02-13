// SLIDER
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

// BOTTLE SIZE
document.addEventListener("DOMContentLoaded", function () {
  let sizeTitle = document.getElementById("sizeTitle"); // Select the H3 element
  let sizeButtons = document.querySelectorAll(".size-btn .nav-link"); // Select all size buttons

  sizeButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Remove 'active' class from all buttons
      sizeButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      this.classList.add("active");

      // Update the H3 text
      sizeTitle.textContent = this.textContent + " bottle";
    });
  });
});

//CERTIFICATE SLIDER
document.addEventListener("DOMContentLoaded", function () {
  function updateCarouselCaption(carouselId) {
    let carousel = document.querySelector(`#${carouselId}`);
    let tabPane = carousel.closest(".tab-pane"); // Find the parent tab
    let certiCaption = tabPane.querySelector(".certi-caption"); // Find caption inside that tab

    carousel.addEventListener("slid.bs.carousel", function () {
      let activeSlide = carousel.querySelector(".carousel-item.active");
      let newTitle = activeSlide.getAttribute("data-title");
      if (newTitle) {
        certiCaption.textContent = newTitle;
      }
    });
  }

  // Apply the function to each carousel
  updateCarouselCaption("carousel1");
  updateCarouselCaption("carousel2");
  updateCarouselCaption("carousel3");
});

//CERTIFICATE PDF MODAL
document.addEventListener("DOMContentLoaded", function () {
  // Select all "Open Document" buttons
  document.querySelectorAll(".open-doc-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      // Find the closest active carousel inside the same tab
      let activeTab = this.closest(".tab-pane");
      let activeSlide = activeTab.querySelector(
        ".carousel .carousel-item.active iframe"
      );

      if (activeSlide) {
        let pdfSrc = activeSlide.getAttribute("src");

        // Update modal PDF viewer
        document.getElementById("modalPdfViewer").setAttribute("src", pdfSrc);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".open-doc-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      let activeTab = this.closest(".tab-pane");
      let activeCarousel = activeTab.querySelector(".carousel"); // Find active tab's carousel
      let modalCarouselInner = document.querySelector(
        "#modalCarousel .carousel-inner"
      );

      if (activeCarousel) {
        let slides = activeCarousel.querySelectorAll(".carousel-item"); // Get all slides

        // Clear old slides in modal
        modalCarouselInner.innerHTML = "";

        slides.forEach((slide, index) => {
          let iframe = slide.querySelector("iframe");
          let pdfSrc = iframe.getAttribute("src");
          let title = slide.getAttribute("data-title");

          // Create a new slide
          let newSlide = document.createElement("div");
          newSlide.classList.add("carousel-item");
          if (index === 0) newSlide.classList.add("active"); // Set first slide as active

          // Set up slide content
          newSlide.innerHTML = `
            <div>
              <iframe src="${pdfSrc}" width="100%" height="500px" title="${title}"></iframe>
            </div>
          `;

          modalCarouselInner.appendChild(newSlide);
        });
      }
    });
  });
});
