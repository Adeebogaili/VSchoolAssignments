import * as pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
});

pool
  .query('CREATE DATABASE tour-pg;')
  .then((res) => {
    console.log('Database Created');
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

export { pool };
