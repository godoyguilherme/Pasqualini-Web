/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Nacionalidade', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Descricao': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Nacionalidade'
  });
};
