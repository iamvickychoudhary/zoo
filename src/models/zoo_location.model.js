import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"
import {Zoo} from './zoo.model.js';

const ZooLocation = sequelize.define('ZooLocation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
   
    website_url: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    img_url: {
      type: DataTypes.STRING,
      // allowNull: true,
    },
    number: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  });
  
Zoo.hasMany(ZooLocation);
ZooLocation.belongsTo(Zoo);
export {ZooLocation} 