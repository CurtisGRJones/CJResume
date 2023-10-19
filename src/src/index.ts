import express, { Express } from 'express';
import config from './config';
import { Services } from './services';
import bodyParser from 'body-parser';
import cors from 'cors';

try {
  const app: Express = express();
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === 'development') {
    app.use(cors({
      origin: 'http://localhost:3000'
    }));
  }

  const services = new Services()

  app.use('/api', services.router);

  app.listen(config.PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${config.PORT}/api/ as ${process.env.NODE_ENV} server`);
  });
} catch (e) {
  console.error(`[server]: Failed to start server due to error\n${e}`)
}