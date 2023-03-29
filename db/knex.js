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

let usersList = new Object();

knex.from('users').select("id", "email")
    .then((rows) => {
        for (row of rows) {
            usersList.id = row['id'];
            usersList.email = row['email']
            console.log(usersList)
        }
    })

// //проверка подключения
// knex.raw('SELECT VERSION()').then(() => {
//     console.log('connection to db successfull');
// });

module.exports = knex;