const API_BASE = "https://mini-hackathon-gourabmukherjee06.onrender.com";

async function loadDashboard() {
  const container = document.getElementById("requestList");
  if (!container) return;

  container.innerHTML = "Loading dashboard...";

  try {
    const res = await fetch(`${API_BASE}/api/requests`);
    const requests = await res.json();

    container.innerHTML = "";

    requests.forEach(req => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${req.title}</h3>
        <p>${req.description}</p>
        <p><strong>Status:</strong> ${req.status}</p>
        ${
          req.status === "open"
            ? `<button onclick="acceptRequest('${req._id}')">Accept</button>`
            : "<span style='color:green;'>Accepted</span>"
        }
      `;

      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = "Error loading dashboard";
    console.error(err);
  }
}

async function acceptRequest(id) {
  try {
    await fetch(`${API_BASE}/api/requests/${id}/accept`, { method: "PUT" });
    loadDashboard();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", loadDashboard);