document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
      });

      if (!response.ok) {
        throw new Error("Failed to create request");
      }

      alert("Request created!");
      form.reset();

      // redirect to browse page
      window.location.href = "browse.html";

    } catch (error) {
      console.error(error);
      alert("Server error. Try again later.");
    }
  });
});
