/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pasqualini', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'Nome': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Logomarca': {
      type: "IMAGE",
      allowNull: true,
      comment: "null"
    },
    'Fone': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Site': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Observacao': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Creci': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Cidade': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Estado': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Proprietario': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'InscricaoMunicipal': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Cep': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Pasqualini'
  });
};
