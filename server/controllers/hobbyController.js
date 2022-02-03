const express = require('express')
const hobbyService = require('../services/hobbyService')
// TODO: Use absolute pathing everywhere

const hobbyController = express.Router()

/**
 * @swagger
 * /hobby:
 *    get:
 *      description: Returns all hobby
 *      responses:
 *        '200':
 *          description: Successfully returned all hobby
 *        '500':
 *          description: Failed to query for hobby
 */
hobbyController.get('', (req, res) => {
 	try {
 		hobbyService.getAllHobbies().then(
 			(data) => {
 				res.json(data)
			}
 		)
 	} catch (err) {
 		console.error('Error while querying for hobbys: ', err.message)
 	}
})

module.exports = hobbyController