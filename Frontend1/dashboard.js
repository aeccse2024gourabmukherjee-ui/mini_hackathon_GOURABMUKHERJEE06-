document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("http://localhost:3000/api/requests");

    if (!res.ok) {
      throw new Error("Server error");
    }

    const requests = await res.json();

    const container = document.getElementById("requests");
    container.innerHTML = "";

    requests.forEach(req => {
      const div = document.createElement("div");
      div.style.border = "1px solid black";
      div.style.margin = "10px";
      div.style.padding = "10px";

      div.innerHTML = `
        <h3>${req.title}</h3>
        <p>${req.description}</p>
        <small>Created by: ${req.createdBy}</small>
      `;

      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
    alert("Failed to load requests");
  }
});