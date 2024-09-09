const mysql = require('mysql2');

// Tạo kết nối với MySQL
const connection = mysql.createConnection({
  host: 'localhost',      // Thay đổi nếu bạn có server khác
  user: 'root',       // Tên người dùng MySQL của bạn
  password: '12345678', // Mật khẩu của người dùng MySQL
  database: 'gpbl', // Tên cơ sở dữ liệu MySQL
});

// Kết nối tới MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

module.exports = connection;
