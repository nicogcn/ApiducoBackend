module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCHEDULES', {
    idSchedule: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idLesson: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'LESSONS',
        key: 'idLesson'
      }
    },
    dayOfWeek: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    timeInit: {
      type: DataTypes.TIME,
      allowNull: false
    },
    timeEnd: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'SCHEDULES',
    timestamps: false
  });
};
