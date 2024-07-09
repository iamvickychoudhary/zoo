import {DB_NAME} from "../constants.js"

const connectDB = async () => {
try {
    
} catch (error) {
    console.log("MYSQL connection FAILED", error);
    process.exit(1)
}

}

export default connectDB;