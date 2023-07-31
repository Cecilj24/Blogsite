const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class messages extends Model {}

messages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          message: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    }
)