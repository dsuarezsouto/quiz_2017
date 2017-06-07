/**
 * Created by dsuarezsouto on 7/6/17.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Session',
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique:true
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                validate: {notEmpty: {msg: "Falta el username."}}
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        }
    );
};

