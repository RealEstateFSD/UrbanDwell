import express from "express";

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
    console.log("ok");
    res.send("Test route working!");  // Send a response to the client
});

export default router;
