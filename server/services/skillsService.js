const db = require('../db')

const getAllSkills = async () => {
	return await db.query('SELECT * from rybald.skill', {})
}

module.exports = {
	getAllSkills: getAllSkills,
}