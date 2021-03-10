const pgConnection = process.env.DATABASE_URL;


module.exports = {
  development: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' },
  },
  testing: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },
  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },
};