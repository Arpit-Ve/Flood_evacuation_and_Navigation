const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const app = express();

app.use(cors());
app.use(express.json());

// --------------------
// TEST ROUTE
// --------------------
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// --------------------
// FLOOD STATUS API
// --------------------
app.get("/api/flood-status", (req, res) => {
  res.json({
    area: "Ghaziabad",
    status: "Safe",
    waterLevel: "Low"
  });
});

// --------------------
// FLOOD DATASET API
// --------------------
app.get("/api/flood-data", (req, res) => {
  const results = [];

  fs.createReadStream(path.join(__dirname, "data", "flood_data.csv"))
    .pipe(csv())
    .on("data", row => {
      if (row.SUSCEP === "Very_High") {
        results.push({
          rainfall: row.Rainfall,
          risk: row.SUSCEP
        });
      }
    })
    .on("end", () => {
      res.json(results.slice(0, 5));
    })
    .on("error", err => {
      res.status(500).json({ error: err.message });
    });
});

// --------------------
// ALERT STORAGE API (FILE BASED)
// --------------------
const alertFilePath = path.join(__dirname, "data", "alerts.json");

app.post("/api/alert", (req, res) => {
  console.log("📥 Alert request received");

  const newAlert = {
    user: req.body.user || "anonymous",
    time: new Date().toISOString()
  };

  let alerts = [];

  if (fs.existsSync(alertFilePath)) {
    const fileData = fs.readFileSync(alertFilePath, "utf-8");
    alerts = fileData ? JSON.parse(fileData) : [];
  }

  alerts.push(newAlert);

  fs.writeFileSync(alertFilePath, JSON.stringify(alerts, null, 2));

  console.log("✅ Stored in alerts.json:", newAlert);

  res.json({
    success: true,
    message: "User subscribed for flood alerts"
  });
});

// --------------------
// START SERVER (LAST)
// --------------------
const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
