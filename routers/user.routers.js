const express = require("express")

//Controllers
const { getAllUsers, timeIn, getUserById, exitUser, cancelUser} = require("../controllers/users.controllers")


const usersRouter = express.Router()


//Define endpoints... siempre se definen antes del .listen
usersRouter.get("/", getAllUsers)

usersRouter.post("/", timeIn)

usersRouter.get("/:id", getUserById)

usersRouter.patch("/:id", exitUser)

usersRouter.delete("/:id", cancelUser)



module.exports = { usersRouter }