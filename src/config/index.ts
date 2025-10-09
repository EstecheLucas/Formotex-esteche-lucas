import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'dev_secret',
  dbUrl: process.env.DATABASE_URL || ''
};
