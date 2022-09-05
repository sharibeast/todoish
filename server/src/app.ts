import express from 'express';
import config from 'config';
import connect from './utils/db';
import logger from './utils/logger';
import routes from './routes';

const PORT = config.get<number>('port');

const app = express();
app.use(express.json())
// app.use(express.urlencoded({}))

app.listen(PORT, async () => {
  logger.info(`server is running safe at port ${PORT}`);
  await connect();

  routes(app);
});
