const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');

//MIDDLEWARES AND CONFIG
const app = express();

//ADDING BODY TO THE REQ
app.use(express.json());

dotenv.config({ path: './.env' });

//PORT TO BE USED
const port = process.env.PORT || 3333;

//ROUTE
app.use('/api/v1/users', userRouter);

//CONNECT
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
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
