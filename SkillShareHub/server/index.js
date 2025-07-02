
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.send({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).send({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.send({ token });
});

app.listen(5000, () => {
  console.log('Auth server running on http://localhost:5000');
});
