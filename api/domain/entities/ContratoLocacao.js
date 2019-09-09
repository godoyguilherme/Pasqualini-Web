/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContratoLocacao', {
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
    'Locatario': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'EnderecoLocatario': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'PrazoContratual': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'InicioContrato': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'FimContrato': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Finalidade': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Aluguel': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Vencimento': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Desconto': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Fiador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Reajuste': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Procurador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Data': {
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
    'NomeLocatario': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'NomeFiador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'NomeConjugeFiador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'ValorTitulo': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'NumeroTitulo': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'ContratoLocacao'
  });
};
