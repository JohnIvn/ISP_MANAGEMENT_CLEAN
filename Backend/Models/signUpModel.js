import db from '../database.js';
import { Sequelize, DataTypes, Model } from 'sequelize';

// Define UserAccount Model
class UserAccountModel extends Model {}

const UserAccount = UserAccountModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize: db,
    modelName: 'UserAccount',
    tableName: 'useraccounts',
    timestamps: false, // You can set this to true if you want timestamps
  }
);

// Define AdminAccount Model
class AdminAccountModel extends Model {}

const AdminAccount = AdminAccountModel.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize: db,
    modelName: 'AdminAccount',
    tableName: 'adminaccounts',
    timestamps: false, 
  }
);

export { UserAccount, AdminAccount };
