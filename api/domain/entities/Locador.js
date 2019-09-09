/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Locador', {
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
    'CpfRazaoSocial': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Rg': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'EstadoCivil': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'Profissao': {
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
    'DataContrato': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'PercentualAdm': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    },
    'TipoPagamento': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'Agencia': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'TipoConta': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    },
    'NumeroConta': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Observacao': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Email': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'BancoId': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null",
      references: {
        model: 'Banco',
        key: 'Id'
      }
    },
    'NacionalidadeId': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null",
      references: {
        model: 'Nacionalidade',
        key: 'Id'
      }
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
    'Depositado': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'TipoPessoa': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Locador'
  });
};
