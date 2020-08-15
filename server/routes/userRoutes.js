const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAll);

router
  .route('/:id')
  .get(userController.getOne)
  .post(userController.createOne)
  .patch(userController.updateOne)
  .delete(userController.deleteOne);

module.exports = router;
