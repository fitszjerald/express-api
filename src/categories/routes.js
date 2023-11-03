const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get(
  '/categories',
  (req, res) => {
    controller.getAllCategories(res, req.body);
  }
);

module.exports = router;