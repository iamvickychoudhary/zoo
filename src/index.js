import dotenv from "dotenv"
import { app } from './app.js'
import { User } from "./models/user.model.js"
import { UserLocation } from "./models/user.model.js"
import { Zoo } from "./models/zoo.model.js"
import { connectDB, sequelize } from "./db/index.js";


dotenv.config({
  path: './.env'
})

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("MySQL DB connection failed !!!", err)
  })

// Sync all models
await sequelize.sync({ force: true });
  

