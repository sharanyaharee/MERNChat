import User from "../models/userModels.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUSers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUSers);
  } catch (error) {
    console.log("Error in getUserForSidebar ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
