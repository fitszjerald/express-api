/**
 * @swagger
 * /products:
 *   post:
 *     summary: Retrieve a list of products.
 *     description: Retrieve a list of products.
 *     consumes:
 *       - "application/json"
 *       - "application/xml"
 *     produces:
 *       - "application/json"
 *       - "application/xml"
 *     parameters:
 *       - name: size
 *         in: query
 *         description: The Product PageSize that needs to be fetched. example=10.
 *         required: true
 *         schema:
 *           type: number
 *       - name: page
 *         in: query
 *         description: The Product pageNo that needs to be fetched. example=1.
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               merchantIds:
 *                type: array
 *                items:
 *                  type: number
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
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: product name.
 *                         example: null
 *
 * /products/{categoryId}:
 *   post:
 *     summary: Retrieve a list of products by categoryId.
 *     description: Retrieve a list of products by categoryId.
 *     parameters:
 *       - name: categoryId
 *         in: path
 *         description: categoryId
 *         required: true
 *         schema:
 *         type: number
 *       - name: size
 *         in: query
 *         description: The Product PageSize that needs to be fetched. example=10.
 *         required: true
 *         schema:
 *           type: number
 *       - name: page
 *         in: query
 *         description: The Product pageNo that needs to be fetched. example=1.
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               merchantIds:
 *                type: array
 *                items:
 *                  type: number
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
 *                         description: The product ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: product name.
 *                         example: null
 */
const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.post('/products', (req, res) => {
  controller.getAllProducts(req, res);
});

router.post('/products/:categoryId', (req, res) => {
  controller.getAllProducts(req, res);
});

module.exports = router;
