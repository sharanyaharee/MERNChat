import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;

    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }
  Promise.all([newMessage.save(),conversation.save()])

//Socket.io functionality

    res.status(201).json({newMessage})
  } catch (error) {
    console.log("Error in sending messages", error.message);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const getMessage = async(req,res)=>{
  try{
    const {id:userToChatId} = req.params;
    const senderId = req.user._id
    const conversation = await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]},
    }).populate("messages")


    if(!conversation) return res. status(440).json([])
    let messages = conversation.messages

      res.status(200).json(messages)
  }catch(error){
    console.log("Error in getMessage controller",error.message)
    res.status(500).json({error:"Internal Server Error!"})
  }
}
 