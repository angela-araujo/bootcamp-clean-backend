const knexConfig = {

    development: {
        client: 'pg',
        connection: {
            database: 'cleannodebackend',
            host: '127.0.0.1',
            port: 5432,
            user: 'postgres',
            password: 'postgres'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: '../shared/infra/database/migrations'
        },
    }
}

export default knexConfig;