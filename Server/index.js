const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const hotel = require("./data/hotel.json");
const place = require("./data/place.json");

app.get("/", (req, res) => {
  res.send("Wellcome To Travel Zone");
});

app.get("/hotels", (req, res) => {
  res.send(hotel);
});

app.get("/place", (req, res) => {
  res.send(place);
});

app.get("/hotels/:id", (req, res) => {
  const id = req.params.id;
  const hotelId = hotel.find((h) => h.id == id);
  res.send(hotelId);
});

app.get("/place/:id", (req, res) => {
  const id = req.params.id;
  const placeId = place.find((p) => p.id == id);
  res.send(placeId);
});

app.listen(port, () => {
  console.log(`Travel zone is running on ${port}`);
});
