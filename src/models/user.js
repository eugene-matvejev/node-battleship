export default (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(64),
                allowNull: false,
            },
            flags: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            tableName: 'users',
            timestamps: false,
        }
    );

    User.belongsToMany(User, { timestamps: false, as: 'children', foreignKey: 'userId', through: 'user_friendship' });
    User.belongsToMany(User, { timestamps: false, as: 'parents', foreignKey: 'friendId', through: 'user_friendship' });

    return User;
};
