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
      allowNull: false
    },
    idStudent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'STUDENTS',
        key: 'idStudent'
      }
    },
    idManager: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    program: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    practics: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dateSolictude: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    timeInit: {
      type: DataTypes.TIME,
      allowNull: false
    },
    timeEnd: {
      type: DataTypes.TIME,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'SOLICITUDE'
  });
};
