// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM is fully loaded");

//   const form = document.querySelector(".contact-form");
//   if (!form) {
//     console.error("Form not found!");
//     return; // Stop execution if form is not found
//   }

//   const responseMessage = document.createElement("p");
//   responseMessage.style.display = "none"; // Hide initially
//   responseMessage.style.marginTop = "10px";
//   form.appendChild(responseMessage); // Add message below form

//   form.addEventListener("submit", async function (event) {
//     console.log("Form submit event triggered!"); // Check if submit is firing
//     event.preventDefault(); // Prevent default form submission

//     const formData = {
//       name: document.querySelector("input[name='name']").value,
//       phone: document.querySelector("input[name='phone']").value,
//       email: document.querySelector("input[name='email']").value,
//       message: document.querySelector("input[name='message']").value,
//     };

//     if (!formData.name || !formData.phone || !formData.email || !formData.message) {
//       responseMessage.style.color = "red";
//       responseMessage.textContent = "Please fill in all required fields.";
//       return; // Stop submission if form is incomplete
//     }

//     responseMessage.style.display = "block"; // Show loading state
//     responseMessage.style.color = "black";
//     responseMessage.textContent = "Submitting..."; // Loading state

//     try {
//       const response = await fetch("http://43.204.107.170:3000/enquiry", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("Response Status:", response.status); // Debug response status

//       if (response.ok) {
//         responseMessage.style.color = "green";
//         responseMessage.textContent = "Form submitted successfully!";
//         form.reset(); // Clear form fields after success
//       } else {
//         responseMessage.style.color = "red";
//         responseMessage.textContent = `Error: ${result.message || "An error occurred."}`;
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       responseMessage.style.color = "red";
//       responseMessage.textContent = "Something went wrong. Please try again.";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (!form) {
    console.error("Form element not found. Check the class name.");
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default page reload

    console.log("Form submission started...");

    const formData = {
      name: document.querySelector("input[name='name']").value,
      phone: document.querySelector("input[name='phone']").value,
      email: document.querySelector("input[name='email']").value,
      message: document.querySelector("input[name='message']").value,
    };

    try {
      const response = await fetch("http://43.204.107.170:3000/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response received:", response);

      const result = await response.json();

      if (response.ok) {
        console.log("Success:", result);
        alert("Form submitted successfully!");
        form.reset(); // Clear form fields
      } else {
        console.error("Error:", result);
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  });
});
