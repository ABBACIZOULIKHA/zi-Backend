module.exports = (sequelize, DataTypes) => {
    const Olts = sequelize.define("Olts", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stackVlan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      neName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cmp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      investNature: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dwellingType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      budgetCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      geomarketingCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressIp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dwellingsNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    });
    Olts.associate = (models) => {
      Olts.hasMany(models.Sites, {
        onDelete: "cascade",
      });
    };

    Olts.associate = (models) => {
        Olts.hasMany(models.Fdts, {
          onDelete: "cascade",
        });
      };
   
    return Olts;
  };