/**
 * @swagger
 * /merchants:
 *   get:
 *     summary: Retrieve a list of merchants.
 *     description: Retrieve a list of merchants.
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
 *                         description: The merchant ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: merchant name
 *                         example: null
 */
const express = require('express');

const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
  controller.getAllMerchants(req, res);
});

module.exports = router;
