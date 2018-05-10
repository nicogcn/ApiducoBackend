module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MATERIALS', {
    idMaterial: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idLaboratory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'LABORATORIES',
        key: 'idLaboratory'
      }
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
    tableName: 'MATERIALS',
    timestamps: false
  });
};
