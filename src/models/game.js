export default (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Game',
        {
            id: {
                // type: DataTypes.UUID,
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        },
        {
            tableName: 'games',
            timestamps: false,
        }
    );

    return model;
};
