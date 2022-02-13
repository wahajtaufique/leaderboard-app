const Player = require('../models/player');
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const player = await new Player(req.body).save()
        res.send(player);
    } catch (error) {
        res.send(error)
    }
});

router.get("/", async (req, res) => {
    try {
        const players = await Player.find();
        res.send(players);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const player = await Player.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        )
        res.send(player);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        res.send(player);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router