// index.js  (pure ES-module version)
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the CORS middleware so the browser will 
// allow my front-end (running on localhost:3000) to call this back-end (on localhost:5000).
import Portfolio from './models/Portfolio.js';

dotenv.config();

const app = express();
app.use(cors());// Attach the CORS middleware to every incoming request → add the Access-Control-Allow-Origin headers
app.use(express.json());// Attach Express’s built-in body-parser. 
// Whenever the client sends JSON (Content-Type: application/json), parse it into req.body so I can read it inside my route handlers.

await mongoose.connect(process.env.MONGO_URL);
console.log('Mongo connected');

app.get('/api/portfolio', async (_req, res) => {
  const doc = await Portfolio.findOne();   // { _id, en, fr }
  res.json(doc ? { en: doc.en, fr: doc.fr } : { en: {}, fr: {} });
});
// Simple health endpoint so the service root responds with JSON instead of Express's default "Cannot GET /"
app.get('/', (_req, res) => {
  res.json({ status: 'ok', api: '/api/portfolio' });
});
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`API on :${PORT}`));
