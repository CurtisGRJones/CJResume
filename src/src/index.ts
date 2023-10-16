import express, { Express, Request, Response } from 'express';
import config from './config';
import { useServices } from './services';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Express = express();
app.use(bodyParser.json());

console.log(process.env.NODE_ENV )

if( process.env.NODE_ENV === 'development' ) {
  app.use(cors({
    origin: 'http://localhost:3000'
  }));
}
const sercives = useServices(app);

app.get('/', (req: Request, res: Response) => {
  // TODO make this check serices as they are used
  res.send({
    running: true,
    sercives
  })
});

app.listen(config.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${config.PORT}`);
});