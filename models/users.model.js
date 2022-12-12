const { v4: uuidv4 } = require('uuid');
const users = [
    {
        id: uuidv4(),
        username: "Mahbub Rahman",
        email: "mahbub@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Rakibul Rahman",
        email: "rakib@gmail.com"
    }
];
module.exports = users;