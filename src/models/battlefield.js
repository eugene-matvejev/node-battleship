export default (sequelize, DataTypes) => {
    const model = sequelize.define(
        'Battlefield',
        {
            id: {
                // type: DataTypes.UUID,
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            owner: {
                // type: DataTypes.UUID,
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            game: {
                // type: DataTypes.UUID,
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: 'battlefields',
            timestamps: false,
        }
    );

    model.associate = ({ Game, Battlefield, User }) => {
        Game.hasMany(Battlefield, { foreignKey: 'game', sourceKey: 'id' });
        User.hasMany(Battlefield, { foreignKey: 'owner', sourceKey: 'id' });

        Battlefield.belongsTo(Game, { foreignKey: 'game', targetKey: 'id' });
        Battlefield.belongsTo(User, { foreignKey: 'owner', targetKey: 'id' });
    }

    return model;
};
