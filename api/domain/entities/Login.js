/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Login', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Usuario': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Senha': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Login'
  });
};
