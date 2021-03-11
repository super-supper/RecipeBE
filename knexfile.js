const pgConnection = process.env.DATABASE_URL;


module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "102030",
      database: "SS"
    },
    useNullAsDefault: true,
    migrations: { directory: './migrations' },
    seeds: { directory: './seeds' },
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
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: "./database/migrations" },
    seeds: { directory: "./database/seeds" },
  },
};