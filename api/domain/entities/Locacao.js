/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Locacao', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'LocatarioId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Locatario',
        key: 'Id'
      }
    },
    'ImovelId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Imovel',
        key: 'Id'
      }
    },
    'Valor': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    },
    'DiasMes': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'Desconto': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    },
    'Acrescimo': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    },
    'DataInicioContrato': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'DataUltimoReajuste': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'CreditoLocatario': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'DebitoLocador': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'DebitoLocatario': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'CreditoLocador': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'TipoSeguro': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'TipoLocacao': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'ValorIptu': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'ValorSeguro': {
      type: DataTypes.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'Observacao': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'Ativa': {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "null"
    },
    'DataVenctoSeguroParticular': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'DataPrazoPagamento': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'ObservacaoLocador': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "null"
    },
    'DataFimContrato': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'Locacao'
  });
};
