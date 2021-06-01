import React, {useEffect, useState} from 'react';

import Box from '@material-ui/core/Box';
import {ResponsiveBar} from '@nivo/bar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

import ScoreSubmission from './Submission';
import Client from '../../Client';
import {useAuthContext} from '../../App';

interface ITeam {
  team: string;
  score: number;
}

const mapObjectToArray = (object: {[key: string]: any}) => {
  return Object.keys(object).map((team) => {
    return {
      team,
      score: parseFloat(object[team]),
    };
  });
};

let bestScore = '';
let lastScore = '';

const Scores = () => {
  const {challenge, team} = useAuthContext();

  const [scores, setScores] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const update = (data: any) => {
    if (data.error) {
    } else if (data.improved === false) {
      console.log("The score for the last attempt (which did not improve) was", data.newScore);
      lastScore = data.newScore;
      setOpen(true);
    } else {
      setScores(mapObjectToArray(data.score));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await Client.getScores(challenge);

      update(result.data);
    };

    fetchData();

    const timer = setInterval(fetchData, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [challenge]);

  const onSubmit = async (predictions: any) => {
    const result = await Client.submit(challenge, team, predictions);

    update(result.data);
  };

  return (
    <Box margin="16px 0">
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>No luck this time!</DialogTitle>
        <DialogContent>
          <Typography>There was no improvement. Good luck next time!</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Ranking teamName={team} scores={scores} />
      <ScoreSubmission onSubmit={onSubmit} />
    </Box>
  );
};

type IRanking = {
  teamName: string;
  scores: ITeam[];
};

const Ranking = ({teamName, scores}: IRanking) => {
  return (
    <Box my={2}>
      <Box bgcolor="white" padding="32px" m="0 auto" width="600px">
        <Typography variant="h6">Leaderboard</Typography>

        {!scores || scores.length < 1 ? (
          <p>No team has submitted a solution yet</p>
        ) : (
          <>
            <Typography variant="body2">
              Until staturday 4 pm the leaderboard will not show team names
              {teamName === 'Guest'
                ? '.'
                : `, however, your own team (${teamName}) is highlighted in yellow.`}
            </Typography>
            <MyResponsiveBar teamName={teamName} data={scores} />
          </>
        )}
      </Box>
    </Box>
  );
};

type IMyResponsiveBar = {teamName: string; data: any};

const MyResponsiveBar = ({teamName, data}: IMyResponsiveBar) => {
  if (!data) {
    return null;
  }
  const layers = ['markers', 'annotations', 'grid', 'bars', 'legends', 'axes'];

  bestScore = data.map((value: any) => {
    if (value.team === teamName) {
      return value.score;
    } else {
      return "";
    }});

  return (
    <React.Fragment>
    <Box height={`${data.length * 50 + 30}px`}>
      <ResponsiveBar
        animate={true}
        axisBottom={{
          renderTick: (data) => {
            return (
              <>
                <line
                  x1={data.x}
                  x2={data.x}
                  y1="0"
                  y2={data.lineY}
                  style={{stroke: 'rgba(0, 0, 0, 1)', strokeWidth: 1}}
                />
                <text
                  dominantBaseline="text-before-edge"
                  textAnchor="middle"
                  transform={`translate(${data.x}, 12.5) rotate(${data.rotate})`}
                  style={{
                    fill: 'rgba(0, 0, 0, 1)',
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: 'sans-serif',
                  }}
                >
                  {data.value}
                </text>
              </>
            );
          },
        }}
        axisLeft={{
          renderTick: (data) => {
            return (
              <>
                <text
                  dominantBaseline="text-before-edge"
                  textAnchor="start"
                  transform={`translate(${data.x + 10}, ${data.y - 7}) rotate(${data.rotate})`}
                  style={{
                    fill: 'rgba(0, 0, 0, 1)',
                    textShadow: '1px 1px 3px rgba(0 , 0, 0, 0.1)',
                    fontSize: '12px',
                    fontWeight: 700,
                    fontFamily: 'sans-serif',
                  }}
                >
                  {data.value}
                </text>
              </>
            );
          },
        }}
        axisRight={null}
        axisTop={null}
        borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
        colors={(data) => {
          return data.data.color;
        }}
        data={data
          .sort((a: any, b: any) => a.score - b.score)
          .map((value: any) => {
            if (value.team === teamName) {
              return {
                ...value,
                color: 'rgb(241, 210, 57, 1)',
              };
            } else {
              return {
                ...value,
                color: 'rgb(241, 57, 87, 1)',
              };
            }
          })}
        // @ts-ignore
        layers={layers}
        enableGridX={true}
        enableGridY={false}
        enableLabel={false}
        theme={{
          grid: {
            line: {
              stroke: 'rgba(0, 0, 0, 0.1)',
            },
          },
        }}
        indexBy="team"
        isInteractive={false}
        keys={['score']}
        layout="horizontal"
        legends={[]}
        margin={{top: 0, right: 10, bottom: 30, left: 5}}
        maxValue={5}
        minValue={0}
        motionDamping={15}
        motionStiffness={90}
        padding={0.3}
      />
    </Box>
    <Box pt={4}>
      <Typography >Your best score is {bestScore}</Typography>
      <Typography >Your last attempt was {lastScore}</Typography>
    </Box>
    </React.Fragment>
  );
};

export default Scores;
