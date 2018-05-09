module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MATERIAL', {
    idMaterial: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idLaboratory: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    nameMaterial: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    numberMaterial: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mark: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    tableName: 'MATERIAL'
  });
};
