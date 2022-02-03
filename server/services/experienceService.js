const db = require('../db')

const getAllExperiences = async () => {
	return await db.query('SELECT * from rybald.experience', {})
}

module.exports = {
	getAllExperiences: getAllExperiences,
}
