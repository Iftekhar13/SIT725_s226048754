const mongoose = require('mongoose');
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/deakinGameDB')
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log("MongoDB connection error:", err));

// Define Game schema
const gameSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,        
  description: String,
});

// Game model
const Game = mongoose.model('Game', gameSchema);


app.get('/api/games', async (req, res) => {
  try {
    const games = await Game.find({});
    res.json({ statusCode: 200, data: games, message: 'Success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log("App listening on port " + port);
});