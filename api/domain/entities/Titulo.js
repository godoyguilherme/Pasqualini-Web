/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Titulo', {
    'LocatarioId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'Locatario',
        key: 'Id'
      }
    },
    'Numero': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Seguradora': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Valor': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Titulo'
  });
};
