import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Подключено к базе данных SQLite.');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      lastName TEXT,
      email TEXT
    )`);
  }
});

app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    res.status(200).json(row);
  });
});

app.post('/users', (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string') {
    return res.status(400).json({ error: 'Неверные данные' });
  }

  db.run(
    'INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)',
    [firstName, lastName, email],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, firstName, lastName, email });
    }
  );
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string') {
    return res.status(400).json({ error: 'Неверные данные' });
  }

  db.run(
    'UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?',
    [firstName, lastName, email, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (this.changes === 0) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.status(200).json({ message: 'Пользователь обновлен' });
    }
  );
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }
    res.status(200).json({ message: 'Пользователь удален' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
