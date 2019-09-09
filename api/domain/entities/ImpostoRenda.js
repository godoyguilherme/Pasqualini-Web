/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ImpostoRenda', {
    'Id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'MesAno': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "null"
    },
    'Ano': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'Mes': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null"
    },
    'Aluguel': {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "null"
    },
    'LocacaoId': {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "null",
      references: {
        model: 'Locacao',
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
    }
  }, {
    tableName: 'ImpostoRenda'
  });
};
