import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const auth = typeof req.auth === "function" ? req.auth() : req.auth;
      const clerkId = auth?.userId;

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      // try to find existing user in db by clerk ID
      let user = await User.findOne({ clerkId });

      // if user does not exist, create it from Clerk profile
      if (!user) {
        const clerkUser = await clerkClient.users.getUser(clerkId);

        const primaryEmail = clerkUser.emailAddresses?.find(
          (email) => email.id === clerkUser.primaryEmailAddressId
        ) || clerkUser.emailAddresses?.[0];

        const email = primaryEmail?.emailAddress || "";
        const name =
          clerkUser.fullName ||
          [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
          email ||
          "Unknown User";
        const profileImage = clerkUser.imageUrl || "";

        user = await User.create({
          name,
          email,
          profileImage,
          clerkId,
        });
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
