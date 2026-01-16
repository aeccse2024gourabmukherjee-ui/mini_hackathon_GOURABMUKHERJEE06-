const API_BASE = "https://mini-hackathon-gourabmukherjee06.onrender.com";

async function loadRequests() {
  const container = document.getElementById("requestList");
  if (!container) return;

  container.innerHTML = "Loading requests...";

  try {
    const res = await fetch(`${API_BASE}/api/requests`);
    const requests = await res.json();

    container.innerHTML = "";

    if (requests.length === 0) {
      container.innerHTML = "<p>No requests found</p>";
      return;
    }

    requests.forEach(req => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${req.title}</h3>
        <p>${req.description}</p>
        <p>Status: <b>${req.status}</b></p>
        ${
          req.status === "open"
            ? `<button onclick="acceptRequest('${req._id}')">Accept</button>`
            : "<p style='color:green;'>Accepted</p>"
        }
      `;

      container.appendChild(div);
    });
  } catch (err) {
    container.innerHTML = "Error loading requests";
    console.error(err);
  }
}

async function acceptRequest(id) {
  try {
    await fetch(`${API_BASE}/api/requests/${id}/accept`, { method: "PUT" });
    loadRequests();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", loadRequests);