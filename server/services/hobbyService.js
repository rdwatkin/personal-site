const db = require('../db')

const getAllHobbies = async () => {
	return await db.query('SELECT * from rybald.hobby', {})
}

module.exports = {
	getAllHobbies: getAllHobbies,
}
