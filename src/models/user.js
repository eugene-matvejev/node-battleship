export default (sequelize, DataTypes) => {
    const model = sequelize.define(
        'User',
        {
            id: {
                // type: DataTypes.UUID,
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

    model.belongsToMany(model, { timestamps: false, as: 'friend', foreignKey: 'user', through: 'user_friendship' });
    model.belongsToMany(model, { timestamps: false, as: 'friendship_owner', foreignKey: 'friend', through: 'user_friendship' });

    return model;
};
