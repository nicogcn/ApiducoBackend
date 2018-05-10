module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STUDENTS', {
    idStudent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    document: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    program: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'STUDENTS',
    timestamps: false
  });
};
