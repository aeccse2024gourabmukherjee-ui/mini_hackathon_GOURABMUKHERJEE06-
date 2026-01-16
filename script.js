function submitRequest() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    fetch("https://mini-hackathon-gourabmukherjee06.onrender.com/api/requests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description })
    })
    .then(res => res.json())
    .then(() => {
        alert("Request created!");
        window.location.href = "browse.html";
    })
    .catch(err => {
        console.error(err);
        alert("Backend not reachable");
    });
}