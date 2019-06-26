'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      flags: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
