module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SOLICITUDE', {
    idSolicitude: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idLaboratory: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'LABORATORY',
        key: 'idLaboratory'
      }
    },
    idStudent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'STUDENTS',
        key: 'idStudent'
      }
    },
    idLesson: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'LESSON',
        key: 'idLesson'
      }
    },
    idManager: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'MANAGERS',
        key: 'idManager'
      }
    },
    practics: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    solicitedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dateSolicitude: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    timeInit: {
      type: DataTypes.TIME,
      allowNull: true
    },
    timeEnd: {
      type: DataTypes.TIME,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'SOLICITUDE',
    timestamps: false
  });
};
