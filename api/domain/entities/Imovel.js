/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Imovel', {
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
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Bairro': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Cep': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'ValorSeguro': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'DataVenctoSeguro': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'LocadorId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Locador',
        key: 'Id'
      }
    },
    'Observacao': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Seguro': {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Imovel'
  });
};
