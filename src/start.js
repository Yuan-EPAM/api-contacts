require("dotenv").config();
const app = require("./server");

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Express server check check on port ${process.env.SERVER_PORT}`);
});
