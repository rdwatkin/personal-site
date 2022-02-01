const express = require('express')
const skillService = require('../services/skillService.js')
// TODO: Use absolute pathing everywhere

const skillController = express.Router()

/**
 * @swagger
 * /api/skill:
 *    get:
 *      description: Returns all skills
 *      responses:
 *        '200':
 *          description: Successfully returned all skills
 *        '500':
 *          description: Failed to query for skills
 */
 skillController.get('', (req, res) => {
 	try {
 		skillService.getAllSkills().then((data) => {
 			res.json(data)
 		})
 	} catch (err) {
 		console.error('Error while querying for skills: ', err.message)
 	}
 })

 module.exports = skillController
