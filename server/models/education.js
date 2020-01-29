// Education Schema

module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define('Education', {
        schoolName: DataTypes.STRING,
        courseName: DataTypes.STRING,
        degre: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        description: DataTypes.TEXT,
    });
    Education.associate = function (models) {
        Education.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey:'userId'
        });
    };
    return postMessage;
}