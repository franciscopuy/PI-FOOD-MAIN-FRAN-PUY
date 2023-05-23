const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      auto_increment: true
    },
    image: {
      type: DataTypes.STRING,
      validate: {
            isUrl: true
         }
    },
    summary: {
      type: DataTypes.TEXT,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    step: {
      type: DataTypes.TEXT,
    }
  },
  {
    timestamps: false
  }
  
  );
};
