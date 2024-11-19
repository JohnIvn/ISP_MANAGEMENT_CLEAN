import db from '../database.js';
import { Sequelize, DataTypes, Model } from 'sequelize';
class CreateAccountModel extends Model {}

CreateAccountModel.init({
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
    }
}, {
    sequelize: db, 
    modelName: 'UserAccount',
    timestamps: false 
});

export default CreateAccountModel;
