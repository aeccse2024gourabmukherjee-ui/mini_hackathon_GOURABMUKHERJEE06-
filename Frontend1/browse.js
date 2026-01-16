const API_URL = "https://mini-hackathon-gourabmukherjee06.onrender.com/api/requests";

async function loadRequests() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById("requests");
    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "<p>No requests found</p>";
      return;
    }

    data.forEach(req => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.padding = "10px";
      div.style.margin = "10px 0";

      div.innerHTML = `
        <h3>${req.title}</h3>
        <p>${req.description}</p>
        <p>Status: <b>${req.status}</b></p>
        <button onclick="acceptRequest('${req._id}')">Accept</button>
      `;

      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}

async function acceptRequest(id) {
  await fetch(`${API_URL}/${id}/accept`, {
    method: "PUT"
  });

  loadRequests(); // refresh list
}

loadRequests();
