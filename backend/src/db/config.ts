import { Sequelize } from 'sequelize-typescript';

/*
const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db',
  username: 'root',
  password: '123456',
  database: 'lojavirtual',
  logging: false,
});
 */

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3321,
  username: 'root',
  password: '123456',
  database: 'lojavirtual_test',
  logging: false,
});

export default connection;
