import dotenv from 'dotenv';

dotenv.config();

export default {
  database: {
    address: process.env.DB_ADDRESS || '',
    password: process.env.DB_PASSWORD || '',
    user: process.env.DB_USER || '',
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
