module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEACHERS', {
    idTeacher: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
    },
    program: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'TEACHERS',
    timestamps: false
  });
};
