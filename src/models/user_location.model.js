import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"
import {User} from './user.model.js';


const UserLocation = sequelize.define('UserLocation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
   
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  User.hasMany(UserLocation);
  UserLocation.belongsTo(User);
  
  export {UserLocation} 
