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

    model.associate = ({ Battlefield, Cell }) => {
        Battlefield.hasMany(Cell, { foreignKey: 'battlefield', sourceKey: 'id' });

        Cell.belongsTo(Battlefield, { foreignKey: 'battlefield', targetKey: 'id' });
    }

    return model;
};
