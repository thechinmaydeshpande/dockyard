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
  const responseMessage = document.createElement("p");
  responseMessage.style.display = "none"; // Hide initially
  responseMessage.style.marginTop = "10px";
  form.appendChild(responseMessage); // Add message below form

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collecting form data
    const formData = {
      name: document.querySelector("input[name='name']").value,
      phone: document.querySelector("input[name='phone']").value,
      email: document.querySelector("input[name='email']").value,
      message: document.querySelector("input[name='message']").value,
    };

    responseMessage.style.display = "block"; // Show message
    responseMessage.style.color = "black";
    responseMessage.textContent = "Submitting..."; // Loading state

    try {
      const response = await fetch("https://your-backend-api.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        responseMessage.style.color = "green";
        responseMessage.textContent = "Form submitted successfully!";
        form.reset(); // Clear form fields after success
      } else {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Error: " + result.message;
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      responseMessage.style.color = "red";
      responseMessage.textContent = "Something went wrong. Please try again.";
    }
  });
});
