const express = require("express");
const router = express.Router();
const Request = require("../models/Request");

// TEST ROUTE
router.get("/test", (req, res) => {
  res.send("REQUEST ROUTER WORKING");
});

// CREATE REQUEST
router.post("/", async (req, res) => {
  const { title, description } = req.body;

  const newRequest = new Request({
    title,
    description,
    status: "open"
  });

  await newRequest.save();
  res.json({ message: "Request created" });
});

// GET OPEN REQUESTS
router.get("/", async (req, res) => {
  const requests = await Request.find({ status: "open" });
  res.json(requests);
});

// ACCEPT REQUEST
router.put("/:id/accept", async (req, res) => {
  await Request.findByIdAndUpdate(req.params.id, {
    status: "accepted"
  });

  res.json({ message: "Request accepted" });
});

// GET ACCEPTED REQUESTS
router.get("/accepted", async (req, res) => {
  const accepted = await Request.find({ status: "accepted" });
  res.json(accepted);
});

module.exports = router;