import { clerkClient } from "@clerk/express";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

const clerkAuthMiddleware = async (req, res, next) => {
  try {
    const auth = typeof req.auth === "function" ? req.auth() : req.auth;
    const clerkId = auth?.userId;

    if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

    let user = await User.findOne({ clerkId });

    
    if (!user) {
      const clerkUser = await clerkClient.users.getUser(clerkId);

      const primaryEmail =
        clerkUser.emailAddresses?.find((email) => email.id === clerkUser.primaryEmailAddressId) ||
        clerkUser.emailAddresses?.[0];

      const email = primaryEmail?.emailAddress || "";
      const name =
        clerkUser.fullName ||
        [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
        email ||
        "Unknown User";
      const profileImage = clerkUser.imageUrl || "";

      user = await User.findOne({ email });

      if (user) {
        user.clerkId = clerkId;
        user.name = name;
        user.profileImage = profileImage;
        await user.save();
      } else {
        user = await User.create({
          name,
          email,
          profileImage,
          clerkId,
        });
      }
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const guestAuthMiddleware = async (req, res, next) => {
  try {
    let user = await User.findOne({ clerkId: "guest-user" });

    if (!user) {
      user = await User.create({
        name: "Guest User",
        email: "guest@example.com",
        profileImage: "",
        clerkId: "guest-user",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in guestAuthMiddleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const isAuthDisabled = ENV.SKIP_AUTH === "true" || process.env.VERCEL === "1";

export const protectRoute = isAuthDisabled ? guestAuthMiddleware : clerkAuthMiddleware;
