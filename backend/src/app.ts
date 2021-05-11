import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import _ from 'lodash';

import redis from './redis';

import submit from './routes/submit';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/:challenge', async (request: Request, response: Response) => {
  const challenge = request.params.challenge;
  const result = await redis.zrevrange(`hackathon:top:${challenge}`, 0, -1, 'WITHSCORES');

  const list = _.fromPairs(_.chunk(result, 2));

  response.send({score: list});
});

app.post('/login', async (request: Request, response: Response) => {
  const {challenge, name, password} = request.body;

  const pw = await redis.hmget(`hackathon:teams:${challenge}`, name);

  response.send(pw[0] === password);
});

app.use('/submit', submit);

// catch 404 and forward to error handler
app.use((request: Request, response: Response, next: NextFunction) => {
  response.status(400).send({error: 'Not found! (404)'});
});

export default app;
