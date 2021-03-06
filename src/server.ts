import loadApp from './app';
import config from './config';
import connectToDatabase from './database';

startServer();

async function startServer() {
  await connectToDatabase(config.database);
  const app = loadApp();
  app.listen(config.server.port, handleListen);
}

function handleListen() {
  console.log(`Server listening on port ${config.server.port}.`);
}
