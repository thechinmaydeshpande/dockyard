new WOW().init();
const blobContactPage = document.getElementById("blob2");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blobContactPage.animate(
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
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.sukkshma.com/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Enquiry submitted successfully!");
        form.reset(); // Clear form fields after submission
      } else {
        alert("Error: " + (result.message || "Failed to submit enquiry."));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  });
});

