
// const express = require('express');
import express from "express"
// const cors = require('cors');
import cors from "cors"
const app = express();
// const mongoose = require('mongoose');
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

app.use(cors());
app.use(express.json());

let games = [];

app.get('/games', async (req, res) => {
  const games = await Game.find().sort({ date: -1 });
  res.json(games);
});

app.post('/games', async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



app.delete('/games/:id', async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));

try {
  await mongoose.connect(MONGO_URI, {
      bufferTimeoutMS: 1000,
      connectTimeoutMS: 1000,
  });
  console.log("✅ successfully connected to MongoDB");
} catch (error) {
  console.error("❌ error connecting to MongoDB", error);
  process.exit(1);
}