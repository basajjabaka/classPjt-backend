import express from "express";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(express.json());

app.get("/", (_req, res) => {
  res.json('API is working');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
