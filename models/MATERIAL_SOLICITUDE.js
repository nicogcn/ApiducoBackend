/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MATERIAL_SOLICITUDE', {
    idMaterialSolicitude: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idMaterial: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'MATERIAL',
        key: 'idMaterial'
      }
    },
    idSolicitude: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'SOLICITUDE',
        key: 'idSolicitude'
      }
    }
  }, {
    tableName: 'MATERIAL_SOLICITUDE'
  });
};