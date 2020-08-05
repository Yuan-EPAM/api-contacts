const db = require("../db/driver");

const getContactByNum = async (num) => {
  try {
    const contacts = await db.getItemByNum(num);
    return contacts;
  } catch (err) {
    throw Error("Error when retrieving contact data by number");
  }
};

module.exports = {
  getContactByNum,
};
