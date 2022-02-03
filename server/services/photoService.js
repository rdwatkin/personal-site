const db = require('../db')

const getAllPhotos = async () => {
	return await db.query('SELECT * from rybald.photo', {})
}

const getPhotoById = async (id) => {
	return await db.query('SELECT * from rybald.photo where id == ' + id)
}

module.exports = {
	getAllPhotos: getAllPhotos,
	getPhotobyId: getPhotoById,
}
