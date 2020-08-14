const express = require('express');
const app = express();
const PORT = 3333;

app.get('/api/v1/users/', (req, res) => {
  res.json('this is working');
});

app.post('/api/v1/signin', (req, res) => {
  res.json('signed in');
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

/*
api/v1/signin -> post - signin
api/v1/signup -> post - signup
api/v1/users -> get - get all users
api/v1/users/:id -> get - show my profile
api/v1/users/forgotpassword/:id -> patch - forgot password
api/v1/users/resetpassword/:id -> delete - reset password
api/v1/users/updatepassword/:id -> patch - update password
api/v1/search?filters=#### -> get - find other users
*/