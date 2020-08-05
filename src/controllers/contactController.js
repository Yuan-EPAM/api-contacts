const contactService = require("../services/contactService");

const getContact = async () => {
  if (process.env.NODE_ENV === "development") {
    const contacts = await contactService.getContactByNum(5);
    return contacts;
  }
};

module.exports = {
  getContact,
};
