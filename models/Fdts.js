module.exports = (sequelize, DataTypes) => {
    const Fdts = sequelize.define("Fdts", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    });

    Fdts.associate = (models) => {
        Fdts.hasMany(models.Sites, {
          onDelete: "cascade",
        });
      };
  
    return Fdts;
  };