const express = require("express");
const router = express.Router();
const Request = require("../models/Request");


// ===============================
// CREATE A NEW REQUEST
// POST /api/requests
// ===============================
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newRequest = new Request({
      title,
      description,
      status: "open"
    });

    await newRequest.save();
    res.status(201).json({ message: "Request created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ===============================
// GET ALL REQUESTS
// GET /api/requests
// ===============================
router.get("/", async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ===============================
// ACCEPT A REQUEST
// PUT /api/requests/:id/accept
// ===============================
router.put("/:id/accept", async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      { status: "accepted" },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json({ message: "Request accepted", updatedRequest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ===============================
module.exports = router;