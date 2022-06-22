//Models
const { Users } = require("../model/user.model")

const getAllUsers =  async (req, res) => {
    //User.findAll().then(users => {}).catch(err => {})
    try {
        const users = await Users.findAll()

        res.status(200).json({
            status: "success",
            users
        })
    } catch (err){
        console.log(err)
    }
}

const timeIn = async (req, res) => {
	try {
		entranceDate = new Date()

		const newUser = await Users.create({
			entranceTime : entranceDate,
		})

		res.status(201).json({
			status: 'success',
			newUser
		})

	} catch(err){
		console.log(err)
	}
}

const getUserById = async (req,res) => {
	const {id} = req.params

	const user = await Users.findOne({ where: {id} })

	if (user === null){
		return res.status(404).json({
			status: 'error',
			message: 'User not found'
		})
	}

	res.status(200).json({
		status: 'success',
		user
	})
}

const exitUser = async (req,res) => {
	const {id} = req.params
	exitDate = new Date()

	const user = await Users.findOne({ where: {id} })

	if (user === null){
		return res.status(404).json({
			status: 'error',
			message: 'User not found'
		})
	}

	await user.update({
		exitTime: exitDate,
		status: 'out'
	})

	res.status(204).json({
		status: 'success',
		user
	})
}

const cancelUser = async (req,res) => {
	const {id} = req.params

	const user = await Users.findOne({ where: {id} })

	if (user === null){
		return res.status(404).json({
			status: 'error',
			message: 'User not found'
		})
	} else if (user.status !== "working") {
        return res.status(404).json({
			status: 'error',
			message: 'User out'
		})
    }

	await user.update({status: 'cancelled'})

	res.status(204).json({
		status: 'success',
		user
	})
}

module.exports = { getAllUsers, timeIn, getUserById, exitUser, cancelUser }