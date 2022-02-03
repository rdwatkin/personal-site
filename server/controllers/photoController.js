const express = require('express')
const photoService = require('../services/photoService')
// TODO: Use absolute pathing everywhere

const photoController = express.Router()

/**
 * @swagger
 * /photo:
 *    get:
 *      description: Returns all photo
 *      responses:
 *        '200':
 *          description: Successfully returned all photo
 *        '500':
 *          description: Failed to query for photo
 */
photoController.get('', (req, res) => {
 	try {
 		photoService.getAllPhotos().then(
 			(data) => {
 				res.json(data)
			}
 		)
 	} catch (err) {
 		console.error('Error while querying for photos: ', err.message)
 	}
})

module.exports = photoController
