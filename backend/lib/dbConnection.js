const mongoose = require('mongoose')
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected successfully')
    } catch (error) {
         throw Error('Internal server error. Please try again!.')
    }
}

module.exports = connect
