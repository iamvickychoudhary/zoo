import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"
import {User} from './user.model.js';

const Zoo = sequelize.define('Zoo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  animal_tags: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  state: {
    type: DataTypes.ENUM('100', '200'),
    allowNull: true,
    defaultValue: '100',  // Set default value here
  },
});

User.hasMany(Zoo);
Zoo.belongsTo(User);
export {Zoo}