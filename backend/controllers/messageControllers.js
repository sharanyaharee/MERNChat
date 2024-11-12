import Conversation from "../models/conversationModel.js"

export const sendMessage = async (req, res) => {
  try {
    const { id:receiverId } = req.params;
    const { message } = req.body;

 const senderId = req.user._id;


 let conversation = await Conversation.findOne({
  partici
 })

  } catch (error) {
    console.log("Error in sending messages", error.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};
