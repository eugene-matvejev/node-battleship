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
    // class Country extends Model {}
    // Country.init({ isoCode: Sequelize.STRING }, { sequelize, modelName: 'country' });
    // class City extends Model {}
    // City.init({ countryCode: Sequelize.STRING }, { sequelize, modelName: 'city' });

    // Here we can connect countries and cities base on country code
    // Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
    // City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});

    model.associate = function ({ Game, Battlefield, User }) {
        Game.hasMany(Battlefield, { foreignKey: 'game', sourceKey: 'id' });
        // User.hasMany(Battlefield, { foreignKey: 'game_owner', sourceKey: 'id' });

        Battlefield.belongsTo(Game, { foreignKey: 'game', targetKey: 'id' });
        // Battlefield.belongsTo(User, { foreignKey: 'game_owner', targetKey: 'owner' });
    }

    return model;
};
