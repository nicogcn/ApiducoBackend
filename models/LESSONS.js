module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LESSONS', {
    idLesson: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idTeacher: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'TEACHERS',
        key: 'idTeacher'
      }
    },
    idLaboratory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'LABORATORIES',
        key: 'idLaboratory'
      }
    },
    nameLesson: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    groupLesson: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'LESSONS',
    timestamps: false
  });
};
