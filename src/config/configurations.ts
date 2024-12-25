export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        user: process.env.DATABASE_USER || 'postgres',
        password: process.env.DATABASE_USER || 'postgres',
        db: process.env.DATABASE_USER || 'postgres',
    }
})