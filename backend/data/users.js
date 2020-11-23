const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ali samid",
    email: "ali@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Salim samid",
    email: "salim@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
