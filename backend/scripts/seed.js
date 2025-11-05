import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Portfolio from '../models/Portfolio.js';
import { portfolioData } from '../portfolioData.js';   // ← changed

dotenv.config();
await mongoose.connect(process.env.MONGO_URL);

await Portfolio.deleteMany({});
await Portfolio.create(portfolioData);
console.log('✅  Portfolio data inserted');
process.exit(0);