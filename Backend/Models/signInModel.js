import { Sequelize, DataTypes, Model } from 'sequelize';  // Import necessary parts from Sequelize
import db from '../database.js';  // Import the Sequelize instance connected to your DB

class SignInModel extends Model {}

SignInModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,  
    modelName: 'SignInModel',
    tableName: 'useraccounts',  
    timestamps: false,  
  }
);

export default SignInModel;
