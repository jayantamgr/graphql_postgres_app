//USER schema


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
    });

    User.associate = function(models) {
        User.hasMany(models.Education, {
            foreignKey: 'userId',
            as: 'education'
        });
    };

    return User;
}

module.exports = 