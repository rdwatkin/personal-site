const mysql = require('mysql2/promise')

const query = async (sql, params) => {
	const connection = await mysql.createConnection({
	  database: "rybald",
	  user: "root",
	  password: "password",
	  host: "mysql",
	  port: "3306",
	});

	connection.connect(function(err) {
	  if (err) throw err;
	});

	const [results, err] = await connection.execute(sql)
	return results
}

module.exports = {
	query: query
}
