const db = require("../db/driver");

const queries = require("./queries");

const getContactInfoByNum = async (num) => {
  try {
    const extraCond = "LIMIT ?";
    const contacts = await db.getItem(queries.ContactInfo(extraCond), [num]);

    return contacts;
  } catch (err) {
    throw Error("Error when retrieving contact by number: " + err);
  }
};

const searchContactByName = async (name) => {
  try {
    const extraCond = `WHERE Name = ?`;
    const contact = await db.getItem(queries.ContactInfo(extraCond), [name]);

    return contact;
  } catch (err) {
    throw Error("Error when retrieving contact detail by ID: " + err);
  }
};

const getContactByPage = async (page) => {
  try {
    const itemPerPage = 20;
    const extraCond = `LIMIT ${itemPerPage} OFFSET ?`;
    const startIdx = itemPerPage * (parseInt(page) - 1);
    const contactDetail = await db.getItem(queries.ContactInfo(extraCond), [
      startIdx,
    ]);

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
  searchContactByName,
  getContactByPage,
  parseJSON,
};
