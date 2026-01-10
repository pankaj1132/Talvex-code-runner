import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getHint, getReview, getSummary, getFollowup } from "../controllers/aiController.js";

const router = express.Router();

router.post("/hint", protectRoute, getHint);
router.post("/review", protectRoute, getReview);
router.post("/summary", protectRoute, getSummary);
router.post("/followup", protectRoute, getFollowup);

export default router;
