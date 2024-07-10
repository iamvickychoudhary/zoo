import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    // tableName: 'users',

  },
);



export { User }