module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_SECRET_REFRESH: process.env.JWT_REFRESH_SECRET || 'REFRESH SECRET',
}