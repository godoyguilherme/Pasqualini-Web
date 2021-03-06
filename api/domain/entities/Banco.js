/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Banco', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Nome': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Banco'
  });
};
