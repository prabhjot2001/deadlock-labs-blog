import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

const isValidUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9@#_]+$/;
  return usernameRegex.test(username);
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long",
    });
  }

  if (!isValidUsername(username)) {
    return res.status(400).json({
      success: false,
      message:
        "Username can only contain alphanumeric characters and symbols: @, #, _, .",
    });
  }

  if (!isValidEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });
  }

  try {
    const isEmailExists = await User.findOne({ email });
    if (isEmailExists) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const isUsernameExists = await User.findOne({ username });
    if (isUsernameExists) {
      return res
        .status(409)
        .json({ success: false, message: "Username already taken" });
    }

    const hashedPassword = await bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ success: true, message: "User signed up successfully!" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const signin = async (req, res) => {};
