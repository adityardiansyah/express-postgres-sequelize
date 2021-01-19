const Sequelize = require('sequelize');

// GET env variables from
const sequelize = new Sequelize(
    // process.env.PGDATABASE,
    // process.env.PGUSER,
    // process.env.PGPASSWORD,
    'nsp_database',
    'postgres',
    'admin',
    {
        host: 'localhost', // process.env.PGHOST,
        dialect: 'postgres'
    });

module.exports = sequelize;