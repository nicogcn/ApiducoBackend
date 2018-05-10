module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MANAGERS', {
    idManager: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    identification: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'MANAGERS',
    timestamps: false
  });
};
