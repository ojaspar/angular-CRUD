const express = require('express');
const router = express.Router();
const UserModel = require('../model/User');

// register routes
router.post('/register', async (req, res) => {
  const { fullname, email, password, conPassword } = req.body;
  try {
    if (!fullname)
      return res.status(403).send({ error: 'Fullname is required' });
    if (!email)
      return res.status(403).send({ error: 'Email field is required' });
    if (!password)
      return res.status(403).send({ error: 'Password field is required' });
    if (!conPassword)
      return res.status(403).send({ error: 'conPassword is required' });
    if (conPassword.length <= 5)
      return res
        .status(403)
        .send({ error: 'Password should be a minimum of 6 characters' });
    if (conPassword !== password) {
      console.log(conPassword, password);
      return res.status(403).send({ error: 'password does not match' });
    }
    const user = await new UserModel({ fullname, email, password });
    // console.log(user);
    await user.save();
    res.status(201).send({ message: 'User Created', user });
    console.log(fullname, email, password, conPassword);
  } catch (e) {
    return res.status(403).send({ error: 'Email in use already' });
  }
});
// login routes
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // find user
  const user = await UserModel.findOne({ email });
  console.log(user);
  try {
    if (!user)
      return res.status(404).send({ error: 'User / Passowrd does not exist' });
    if (user.password !== password)
      return res.status(403).send({ error: 'User /Password dose not exist' });
    return res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
