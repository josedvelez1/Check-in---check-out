const { db, DataTypes } = require("../utils/database.util")

//create our first model (model = table)
const Users = db.define("user", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "working"
    }
})

module.exports = { Users }