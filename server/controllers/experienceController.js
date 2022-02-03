const express = require('express')
const experienceService = require('../services/experienceService')

const experienceController = express.Router()

/**
 * @swagger
 * /experience:
 *    get:
 *      description: Returns all experiences
 *      responses:
 *        '200':
 *          description: Successfully returned all experiences
 *        '500':
 *          description: Failed to query for experiences
 */
 experienceController.get('', (req, res) => {
 	try {
 		experienceService.getAllExperiences().then(
 			(data) => {
 				res.json(data)
 			}
 		)
 	} catch (err) {
 		console.error('Error while querying for experiences: ', err.message)
 	}
 })

 module.exports = experienceController
