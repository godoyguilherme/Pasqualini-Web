/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Locatario', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Endereco': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Nome': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'ReferenciaComercial': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'ReferenciaPessoal': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'FoneResidencial': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'FoneComercial': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'FoneCelular': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'CidadeId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Cidade',
        key: 'Id'
      }
    },
    'Observacao': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'CpfCnpj': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'ReferenciaBancaria': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Locatario'
  });
};
