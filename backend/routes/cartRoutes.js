const express = require('express');
const router = express.Router();
const db = require('../../db/db');

// API: Thêm sản phẩm vào giỏ hàng
router.post('/add', (req, res) => {
  const { name, price } = req.body;
  const query = 'INSERT INTO items (name, price) VALUES (?, ?)';
  db.query(query, [name, price], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, price });
  });
});

// API: Lấy danh sách sản phẩm trong giỏ hàng
router.get('/', (req, res) => {
  const query = 'SELECT * FROM items';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// API: Xóa sản phẩm khỏi giỏ hàng
router.delete('/remove/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM items WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Item removed' });
  });
});

module.exports = router;
