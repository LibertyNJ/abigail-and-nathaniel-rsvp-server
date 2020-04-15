import dotenv from 'dotenv';

dotenv.config();

export default {
  cors: {
    origin: process.env.CORS_ORIGIN,
  },
  database: {
    address: process.env.DB_ADDRESS || '',
    password: process.env.DB_PASSWORD || '',
    user: process.env.DB_USER || '',
  },
  logger: {
    format: process.env.NODE_ENV === 'development' ? 'dev' : 'combined',
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
