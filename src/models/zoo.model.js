import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"

const Zoo = sequelize.define(
  'Zoo',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    animal_tags: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    state: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
  },
  {
    // Other model options go here
  },
);

/// `sequelize.define` also returns the model
console.log(Zoo === sequelize.models.User); // true

export { Zoo }