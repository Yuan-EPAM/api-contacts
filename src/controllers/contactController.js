const contactService = require("../services/contactService");

const getContactData = async (req, res) => {
  let data;
  if ("name" in req.query) {
    let { name } = req.query;
    data = await contactService.searchContactByName(name);
  } else if ("page" in req.query) {
    let { page } = req.query;
    data = await contactService.getContactByPage(page);
  } else {
    throw new Error("Please indicate the data you'd like to get");
  }
  const response = {
    data: contactService.parseJSON(data, "ContactDetails"),
  };
  res.status(200).send(JSON.stringify(response));
};

module.exports = {
  // getContactByNum,
  // getContactByName,
  // getContactByPage,
  getContactData,
};
