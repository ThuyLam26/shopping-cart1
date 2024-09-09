const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const connection = require("./db/db.js")
// Cấu hình thư mục views và sử dụng EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware để sử dụng các tệp tĩnh
app.use(express.static('public'));

// Route chính để hiển thị trang giỏ hàng
app.get('/', (req, res) => {
  // Lấy dữ liệu từ database (ví dụ: các sản phẩm)
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    // Render trang với danh sách sản phẩm
    res.render('index', { products: results });
  });
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
