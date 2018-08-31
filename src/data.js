const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync('src/json/accounts.json', {encoding: 'UTF8'});
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', {encoding: 'UTF8'});
const users = JSON.parse(userData);

const writeJSON = () => {
    const accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON,  'UTF8');
}

module.exports = { accounts, users, writeJSON };