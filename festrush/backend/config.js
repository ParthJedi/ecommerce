export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/festrush',
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'randomText'
}