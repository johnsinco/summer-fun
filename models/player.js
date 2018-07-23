'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    accountId: DataTypes.INTEGER
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};