const db = require("../db/driver");

const queries = require("./queries");

const getContactInfoByNum = async (num) => {
  try {
    const contacts = await db.getItem(queries.ContactInfo, num);

    return contacts;
  } catch (err) {
    throw Error("Error when retrieving contact by number: " + err);
  }
};

const getContactDetailByID = async (userID) => {
  try {
    const contactDetail = await db.getItem(queries.ContactDetailByID, userID);

    return contactDetail;
  } catch (err) {
    throw Error("Error when retrieving contact detail by ID: " + err);
  }
};

const parseJSON = (data, target) => {
  return data.flatMap((item) => {
    if (!(target in item)) return item;

    try {
      return { ...item, [target]: JSON.parse(item[target]) };
    } catch (err) {
      throw Error("Error when parsing contact JSON string:" + err);
    }
  });
};

module.exports = {
  getContactInfoByNum,
  getContactDetailByID,
  parseJSON,
};
