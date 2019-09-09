/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fisica', {
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
    'DataNascimento': {
      type: DataTypes.DATEONLY,
      allowNull: true,
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
    'EstadoCivil': {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    'ProfissaoConjuge': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'RetiradaMensalConjuge': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'NacionalidadeId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Nacionalidade',
        key: 'Id'
      }
    }
  }, {
    tableName: 'Fisica'
  });
};
