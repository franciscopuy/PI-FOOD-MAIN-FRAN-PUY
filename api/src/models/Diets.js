const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diets', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            auto_increment: true
          },
          name: { 
            type: DataTypes.STRING,
            allowNull: false,
          },
         
        },
        {
          timestamps: false
        }
        )}