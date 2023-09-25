module.exports = (sequelize, DataTypes) => {
    const Sites = sequelize.define("Sites", {
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Sites;
  };