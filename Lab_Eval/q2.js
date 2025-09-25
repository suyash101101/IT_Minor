const express = require('express');
const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
  const { username, email, password } = req.body || {};
const errors = [];
  if(!username || username.length < 3) errors.push('username >=3');
  if (!email || !email.includes('@')) errors.push('invalid email');
  if(!password || password.length < 6) errors.push('password >=6');
  if (errors.length) return res.status(400).json({ ok: false, errors });
  return res.json({ ok: true, message: 'registered' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on ' + PORT));


