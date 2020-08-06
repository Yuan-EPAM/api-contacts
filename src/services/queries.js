const ContactInfo = `
  SELECT 
    c.UserID as UserID,
    c.Title as Title,
    c.Name as Name,
    c.BirthDate as BirthDate,
    cd.ContactDetails as ContactDetails,
    c.isFavorite as isFavorite
  FROM (
    SELECT
      UserID,
      Title,
      Name,
      BirthDate,
      isFavorite
    FROM 
      Contact
    LIMIT
      ?
  ) c
  LEFT JOIN (
    SELECT 
      UserID,
      JSON_ARRAYAGG(JSON_OBJECT(
        'ContactDetailType', ContactDetailType,
        'ContactDetailContent', ContactDetailContent
        )) as ContactDetails
    FROM
      ContactDetail
    GROUP BY
        UserID
  ) cd
  ON 
    c.UserID=cd.UserID
  `;

const ContactDetailByID = `
    SELECT
      UserID,
      ContactDetailType,
      ContactDetailContent
    FROM
      ContactDetail
    WHERE
      UserID = ?
`;

module.exports = {
  ContactInfo,
  ContactDetailByID,
};
