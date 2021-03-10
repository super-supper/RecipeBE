const knex = require("knex");
const config = require("../knexfile.js");
const environment = process.env.DB_ENV;
const db = knex(config[environment])

module.exports = db;