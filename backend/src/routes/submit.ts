import {Request, Router, Response} from 'express';
import _ from 'lodash';

import redis from '../redis';

const router = Router();

const getScore = async (predictions: Map<any, any>, challenge: string) => {
  const [numberOfEntries, ...result] = await redis.hmget(
    `hackathon:challenge:${challenge}`,
    'numberOfEntries',
    ...predictions.keys(),
  );

  let score = 0;
  let diff = 0;
  for (const [index, prediction] of [...predictions.values()].entries()) {
    //console.log('res', result[index], 'pred:', prediction);
    diff = parseFloat(result[index]) - prediction;
    score += diff * diff;
  }
  console.log('score', score);
  return score; //(score / parseInt(numberOfEntries, 10)) * 100;
};

router.route('/:challenge').post(async (request: Request, response: Response) => {
  const challenge = request.params.challenge;
  const result = await redis.zrevrange(`hackathon:top:${challenge}`, 0, -1, 'WITHSCORES');
  const list = _.fromPairs(_.chunk(result, 2));

  if (!request.body.predictions) {
    return response.send({score: list, newScore: result});
  }

  const score = await redis.zscore(`hackathon:top:${challenge}`, request.body.team);
  const buffer = Buffer.from(request.body.predictions, 'base64');
  const decoded = buffer.toString('utf-8');
  const predictionsArray = new Map(
    decoded.split(',').map((prediction) => prediction.split(':')) as [string, string][],
  );

  const newScore = await getScore(predictionsArray, challenge);

  await redis.xadd(
    `hackathon:submission:${challenge}`,
    '*',
    'team',
    request.body.team,
    'score',
    newScore,
  );

  console.log('score:', score, 'newScore:', newScore);
  if (score !== null && parseFloat(score) <= newScore) {
    return response.send({score: list, newScore: newScore, error: undefined, improved: false});
  }

  await redis.zadd(`hackathon:top:${challenge}`, [newScore, request.body.team]);

  list[request.body.team] = newScore;

  return response.send({score: list, newScore: newScore, improved: true});
});

export default router;
