const API_URL = "https://mini-hackathon-gourabmukherjee06.onrender.com";

const requestContainer = document.getElementById("requestList");

function loadRequests() {
  fetch(`${API_URL}/api/requests`)
    .then(res => res.json())
    .then(data => {
      requestContainer.innerHTML = "";

      const openRequests = data.filter(req => req.status === "open");

      if (openRequests.length === 0) {
        requestContainer.innerHTML = "<p>No open requests available</p>";
        return;
      }

      openRequests.forEach(req => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <h3>${req.title}</h3>
          <p>${req.description}</p>
          <p><strong>Status:</strong> ${req.status}</p>
          <button onclick="acceptRequest('${req._id}')">Accept</button>
        `;

        requestContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      requestContainer.innerHTML = "<p>Error loading requests</p>";
    });
}

function acceptRequest(id) {
  fetch(`${API_URL}/api/requests/${id}/accept`, {
    method: "PUT"
  })
    .then(res => res.json())
    .then(() => {
      window.location.href = "accepted.html";
    })
    .catch(err => {
      console.error(err);
      alert("Failed to accept request");
    });
}

loadRequests();