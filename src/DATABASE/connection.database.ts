import pg from 'pg'
const { Pool } = pg

const connectionString = process.env.DATABASE_URL;

const db = new Pool({
  allowExitOnIdle: true,
  connectionString,
});

export default db;
