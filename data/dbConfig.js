const knex = require("knex");
const knexfile = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";
// this is going to look for the DB_ENV, or it will default to development. Think to when Luis tried having dev before we added it.
module.exports = knex(knexfile[environment]);
