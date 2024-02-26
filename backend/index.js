const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username
      },
      {
        headers: {
          "private-key": "3bc112b0-5468-45d0-9a44-40918850d046"
        }
      }
    );
    return res.status(response.status).json(response.data);
  } catch (e) {
    // Handle errors appropriately
    console.error("Error:", e); // corrected to use variable 'e' instead of 'error'
    return res.status(e.response.status).json(e.response.data);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
