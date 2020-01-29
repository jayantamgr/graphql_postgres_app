// address schema

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        addressLine1 : DataTypes.STRING,
        addressLine2 : DataTypes.STRING,
        city : DataTypes.STRING,
        state : DataTypes.STRING,
        country : DataTypes.STRING,
        postCode : DataTypes.STRING
    });

    Address.associate = function(models){
        Address.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: 'userId'
        })
    }
}