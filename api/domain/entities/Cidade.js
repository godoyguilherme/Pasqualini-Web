/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cidade', {
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
    },
    'EstadoId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Estado',
        key: 'Id'
      }
    }
  }, {
    tableName: 'Cidade'
  });
};
