const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 8;
const jwtSecret = "JwtToken";

const registerController = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const userExist = await User.findOne({ email: email });
  if (userExist) {
    console.warn("user already existed");
    return res.status(400).json({ error: "user already existed" });
  }

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log(hash);

    const newUser = await User.create({
      email,
      password: hash,
    });
    newUser.save();
    console.log("user saved in mongoDB");
    return res.status(200).json({ success: "register successfull" });
  } catch (error) {
    console.error(error);
  }
};

const loginController = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      console.log("User not found");
      return res.status(400).json({ error: "User doesn't exist" });
    }

    const passwordMatch = await bcrypt.compare(password, userExist.password);

    if (!passwordMatch) {
      console.log("Password didn't match!");
      return res.status(400).json({ error: "Password didn't match" });
    }

    const Token = await jwt.sign({email: userExist.email}, `${jwtSecret}`, { expiresIn: '10h' })

    console.log("Password matched successfully");
    return res.cookie("jwtToken", Token).status(200).json({ success: "Login successful" });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  registerController,
  loginController,
};
