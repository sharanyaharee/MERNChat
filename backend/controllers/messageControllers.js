export const sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    // const senderId ;

  } catch (error) {
    console.log("Error in sending messages", error.message);
    res.status(500).json({ error: "Error in Sending messages" });
  }
};
