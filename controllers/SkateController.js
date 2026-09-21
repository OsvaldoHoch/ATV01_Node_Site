import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.render("Skates");
});

export default router