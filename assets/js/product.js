new WOW().init();
const blob = document.getElementById("blob");
const blob1 = document.getElementById("blob1");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 900,
      fill: "forwards",
    }
  );
  blob1.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    {
      duration: 900,
      fill: "forwards",
    }
  );
};

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".product-list");

  function handleScroll(event) {
    if (window.innerWidth < 991.5) {
      // Apply only on smaller screens
      if (event.deltaY !== 0) {
        event.preventDefault();
        productList.scrollLeft += event.deltaY; // Convert vertical to horizontal scroll
      }
    }
  }

  // Add event listener
  productList.addEventListener("wheel", handleScroll);
});
