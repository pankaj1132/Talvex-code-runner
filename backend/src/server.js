import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);
app.use(clerkMiddleware());

/* ---------------- DB (serverless safe) ---------------- */
let isConnected = false;
app.use(async (req, res, next) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  next();
});

/* ---------------- ROUTES ---------------- */
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend running on Vercel 🚀" });
});

/* ---------------- EXPORT (NO LISTEN) ---------------- */
export default app;
