import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 3000;

app.get("/data/:category/:file", (req, res) => {
  const { category, file } = req.params;
  const filePath = path.join("Database", category, `${file}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.json(data);
  } else {
    res.status(404).json({ error: "File not found!" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running: http://localhost:${PORT}`));
