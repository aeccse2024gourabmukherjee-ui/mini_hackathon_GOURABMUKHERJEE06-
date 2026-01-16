const API_BASE = "https://mini-hackathon-gourabmukherjee06.onrender.com";

const requestForm = document.getElementById("requestForm");

if (requestForm) {
  requestForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description })
      });

      if (res.ok) {
        alert("Request created successfully");
        requestForm.reset();
      } else {
        alert("Failed to create request");
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  });
}