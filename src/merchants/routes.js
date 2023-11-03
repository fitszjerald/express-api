/**
 * @swagger
 * /merchants:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder merchants.
 *     description: Retrieve a list of merchants from JSONPlaceholder. Can be used to populate a list of fake merchants when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of merchants.
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

const controller = require('./controller');

const router = express.Router();

router.get(
  '/',
  (req, res) => {
    controller.getAllMerchants(req, res);
  }
);

module.exports = router;