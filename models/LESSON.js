module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LESSON', {
    idLesson: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idTeacher: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'TEACHER',
        key: 'idTeacher'
      }
    },
    idLaboratory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'LABORATORY',
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
    tableName: 'LESSON',
    timestamps: false
  });
};
