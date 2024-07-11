import { DataTypes } from "sequelize";
import {sequelize} from "../db/index.js"
const User = require('./user.model.js');

const Zoo = sequelize.define('Zoo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  animal_tags: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

// Define the association
User.hasMany(Zoo, { foreignKey: 'user_id' });
Zoo.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Zoo;