const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql";


module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "psql",
      user: "postgres",
      password: "102030",
      database: "ss"
    },
    useNullAsDefault: true,
    migrations: { directory: './database/migrations' },
    seeds: { directory: './database/seeds' },
  },
  testing: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: { directory: "./database/migrations" },
    seeds: { directory: "./database/seeds" },
  },
  production: {
    client: "pg",
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },
};