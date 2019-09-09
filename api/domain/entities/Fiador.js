/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fiador', {
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
    'Nome': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Cpf': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Rg': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'DataNascimento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'NomeFirma': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'EnderecoFirma': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Profissao': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'RetiradaMensal': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'NomeConjuge': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'CpfConjuge': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'RgConjuge': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'RetiradaMensalConjuge': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'ProfissaoConjuge': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Endereco': {
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
    'ReferenciaBancaria': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Fiador'
  });
};
