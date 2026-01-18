function createRequest(event) {
  event.preventDefault(); // 🔴 important for mobile & desktop

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title || !description) {
    alert("Please fill all fields");
    return;
  }

  fetch("https://mini-hackathon-gourabmukherjee06.onrender.com/api/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      status: "pending",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Request created successfully");
      window.location.href = "dashboard.html";
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to create request");
    });
}