/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Juridica', {
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
    'Cnpj': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Juridica'
  });
};
