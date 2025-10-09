import app from './app';
import config from './config';
import { prisma } from './repositories/prisma.repository';

const port = config.port;

const start = async () => {
  try {
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Server failed to start', err);
    process.exit(1);
  }
};

start();
