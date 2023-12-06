const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/database').development);
const { Pool } = require('pg');
const config = require('../config/database').development;

const pool = new Pool({
  user: config.database.username,
  host: config.database.host,
  database: config.database.database,
  password: config.database.password,
  port: config.database.port,
});

// Test the database connection
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    
  } else {
    console.log('Connected to the database:', result.rows[0].now);
  }
  pool.end();
});

const Financialyear = sequelize.define('Finacialyear', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  finacialyear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userid: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  
});

Financialyear.sync();

module.exports = Financialyear;

