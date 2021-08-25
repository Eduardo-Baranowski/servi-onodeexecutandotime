
module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,

  entities: [
    process.env.NODE_ENV !== 'development'
      ? 'dist/entities/**/*.js'
      : 'src/entities/**/*.ts',
  ],
  migrations: [
    process.env.NODE_ENV !== 'development'
      ? 'dist/database/migrations/*.js'
      : 'src/database/migrations/*.ts',
  ],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: './src/database/migrations',
  },
};
