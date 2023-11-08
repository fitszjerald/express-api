/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Retrieve a list of categories.
 *     description: Retrieve a list of categories.
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The category ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: category name.
 *                         example: null
 */
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