const { Sequelize, DataTypes } = require("sequelize")

//content to database
const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Daniel1998",
    port: 5432,
    database: "checklist",
    logging: false
})

module.exports = { db, DataTypes }