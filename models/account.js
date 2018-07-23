'use strict';
module.exports = (sequelize, DataTypes) => {
  var Account = sequelize.define('Account', {
    username: DataTypes.STRING,
    pasword: DataTypes.STRING,
    org_id: DataTypes.INTEGER
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};