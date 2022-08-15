const { v4: uuidv4 } = require("uuid");

// users array
let users = [];

// listing all avaiable user data
module.exports.users_get = (req, res) => {
  res.json(users);
};

// Adding users to the db
module.exports.users_post = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`The user ${user.first_name} has been addeed to the database.`);
};

// Returning the id of the users in the db
module.exports.user_id = (req, res) => {
  const { id } = req.params;

  const userId = users.find((user) => user.id === id);

  res.send(userId);
};

// Deleting the user from the db
module.exports.user_delete = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`user with the id of ${id} has been deleted.`);
};

module.exports.user_update = (req, res) => {
  const { id } = req.params;

  // Passing user params
  const { first_name, last_name, email_address, addreage } = req.body;

  const user = users.find((user) => user.id === id);

  if (first_name) user.first_name = first_name;

  if (last_name) user.last_name = last_name;

  if (email_address) user.email_address = email_address;

  if (address) user.address = address;

  if (age) user.age = age;

  res.send(`User with the id ${id} has update their details`);
};
