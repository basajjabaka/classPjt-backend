import express from "express";
import {subjects} from "./db/schema";
import subjectsRouter from "./routes/subjects"
import cors from 'cors'

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json());

app.use('/api/subjects', subjectsRouter)

app.get("/", (_req, res) => {
  res.json('API is working');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
