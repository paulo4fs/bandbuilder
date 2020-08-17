const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route('/').get(userController.getAll).post(userController.createOne);

router
  .route('/:id')
  .get(userController.getOne)
  .patch(userController.updateOne)
  .delete(userController.deleteOne);

module.exports = router;
