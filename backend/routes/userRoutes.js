import express from "express";
import {
  createUser,
  loginUser,
  logoutController,
  getAllUsers
} from "../controllers/userController.js";

const router = express.Router();
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js";

// Create user and get all users routes
router.route("/")
  .post(createUser) // Create a new user
  .get(authenticate, authorizedAdmin, getAllUsers); // Get all users (admin only)

// Login and logout routes
router.post("/auth", loginUser); // User login
router.post("/logout", logoutController); // User logout

export default router;
