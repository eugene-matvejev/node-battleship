import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { database as c } from '../../config/config';

const sequelize = new Sequelize(c.database, c.username, c.password, c);

const basename = path.basename(__filename);
const context = fs
    .readdirSync(__dirname)
    .reduce(
        (acc, file) => {
            if ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')) {
                const model = sequelize['import'](path.join(__dirname, file));
                acc[model.name] = model;
            }

            return acc;
        },
        {}
    );

for (const name in context) {
    const model = context[name];

    if (model.associate) {
        model.associate(context);
    }
}

context.sequelize = sequelize;
context.Sequelize = Sequelize;

export default context;
