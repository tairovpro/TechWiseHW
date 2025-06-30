const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  playerName: String,
  score: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', GameSchema);