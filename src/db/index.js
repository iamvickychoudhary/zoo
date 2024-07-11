import { DB_NAME } from "../constants.js"
import { Sequelize } from "sequelize"


const sequelize = new Sequelize(DB_NAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    // disable logging
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
        process.exit(1)
    }

}

export { connectDB, sequelize }


