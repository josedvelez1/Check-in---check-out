const express = require("express")

// Routers
const  { usersRouter } = require("./routers/user.routers")

//Utils
const { db } = require("./utils/database.util")

//init express app
const app = express()

app.use(express.json())

app.use("/api/v1/registrations", usersRouter)

// con este paso autenticamos si estamos conectados o no a nuestra Db
db.authenticate()
    .then(() => console.log("db authenticated"))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log("db sync"))
    .catch(err => console.log(err))

app.listen(4000, () => {
    console.log("express app runing!!")
})