
const connection = require('express-myconnection');
const mysql = require('mysql');

mysql.createConnection( {

host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE


});

connection.connect((error) => {

if ( error ) {
    console.log('EROR');
    return;
}
console.log('conectado');

} );

module.exports = connection;




