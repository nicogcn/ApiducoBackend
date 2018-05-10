module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LABORATORY', {
    idLaboratory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nameLaboratory: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    tableName: 'LABORATORY',
    timestamps: false
  });
};
