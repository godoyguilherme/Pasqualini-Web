/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContratoAdm', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Corpo': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'Locador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Fone': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Pagamento': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Data': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Imovel': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'TipoContratoId': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null",
      references: {
        model: 'TipoContrato',
        key: 'Id'
      }
    },
    'NomeLocador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'ContratoAdm'
  });
};
