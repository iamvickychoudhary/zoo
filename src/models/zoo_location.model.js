import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"
const Zoo = require('./zoo.model.js');

const ZooLocation = sequelize.define('ZooLocation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    zoo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Zoo,
        key: 'id',
      },
      allowNull: false,
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
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
  
  // Define the association
  Zoo.hasMany(ZooLocation, { foreignKey: 'zoo_id' });
  ZooLocation.belongsTo(Zoo, { foreignKey: 'zoo_id' });
  
  module.exports = ZooLocation;