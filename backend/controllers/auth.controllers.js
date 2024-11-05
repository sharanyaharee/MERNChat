import User from "../models/userModels.js";
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Password doesn't match!" });
    const user = await User.findOne({ username });
    if (user)
      return res.status(400).json({ error: "username already exists!" });
    const boyImage = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlImage = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyImage : girlImage,
    });

    await newUser.save();
    res.status(201).json({
      _id: newUser,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signUp controller!!", error.message);
    res.status(500).json({ error: "Internal Server Error!!" });
  }
};

export const login = (req, res) => {
  res.send("login route");
  console.log("login route");
};

export const logout = (req, res) => {
  console.log("logout route");
};
