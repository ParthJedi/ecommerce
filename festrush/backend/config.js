export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/festrush',
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'randomText'
}