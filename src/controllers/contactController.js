const contactService = require("../services/contactService");

const getContact = async (req, res) => {
  const contacts = await contactService.getContactInfoByNum(50);
  console.log(contacts);

  const response = {
    data: contactService.parseJSON(contacts, "ContactDetails"),
  };
  console.log(response.data);
  res.status(200).send(JSON.stringify(response));
};

module.exports = {
  getContact,
};
