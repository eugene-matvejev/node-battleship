export default (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Cell',
        {
            id: {
                // type: DataTypes.UUID,
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            coordinate: {
                type: DataTypes.STRING(3),
                allowNull: false,
            },
            battlefield: {
                // type: DataTypes.UUID,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            seq: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            tableName: 'cells',
            timestamps: false,
        }
    );

    // model.belongsTo(model, { timestamps: false, as: 'children', foreignKey: 'battlefieldId', through: 'user_friendship' });
    // model.belongsToMany(model, { timestamps: false, as: 'parents', foreignKey: 'friendId', through: 'user_friendship' });

    return model;
};
