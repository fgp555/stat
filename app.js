const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("."));

// Array to store received data
let data = [];

app.post("/received_data", (req, res) => {
  // Access the data sent from the client
  const receivedData = req.body;

  // Log the received data
  console.log("Received Data:", receivedData);

  // Push the received data into the array
  data.push(receivedData);

  // Respond to the client
  res.send("Data received and inserted into the array!");
});

app.get("/get_data", (req, res) => {
  // Respond with the array containing all received data
  res.json(data);
});

// Endpoint to reset data
app.get("/reset_data", (req, res) => {
  // Reset the data array to an empty array
  data = [];
  // Respond to the client
  res.send("Data reset successfully!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
