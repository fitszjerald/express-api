/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder products.
 *     description: Retrieve a list of products from JSONPlaceholder. Can be used to populate a list of fake products when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of products.
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
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get(
  '/products',
  (req, res) => {
    controller.getAllProducts(req, res);
  }
);

module.exports = router;