const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password, // Replace with your actual MySQL password
  database: process.env.database
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;

