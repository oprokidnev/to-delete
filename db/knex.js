require('dotenv').config();

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    pool: {min: 2, max: 10}
});

module.exports = {
    userListQuery: () => knex.from('users').select("id", "email")
    .then((rows) => {
        let userList = [];
        for (row of rows) {
            userList.push({id: row.id, email: row.email})
        }
        return userList;
    }),
    userQuery: (email) => knex.from('users').select("id", "email").where('email', email)
}

//knex.insert({ telegram_id: 'tgId' }).into('users');