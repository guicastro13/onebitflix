import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix',
    username: 'guicastro13',
    password: 'guicastro13',
    define: {
        underscored: true
    }
})