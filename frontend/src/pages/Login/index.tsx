import React, {useReducer} from 'react';

import {useHistory} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Client from '../../Client';
import {useAuthContext} from '../../App';

import {
  reducer,
  initialState,
  SUBMIT,
  ERROR,
  CHANGE_CHALLENGE,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  Status,
} from './reducer';

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {push} = useHistory();
  const {setTeam, setChallenge} = useAuthContext();

  const onSubmit = async () => {
    dispatch({type: SUBMIT});

    const result = await Client.login(state.challenge, state.name, state.password);

    if (result.data) {
      localStorage.setItem('team', state.name);
      localStorage.setItem('challenge', state.challenge);
      setTeam(state.name);
      setChallenge(state.challenge);
      push('/challenge');
    } else {
      dispatch({type: ERROR});
    }
  };

  return (
    <Box height={1} width={1}>
      <Box display="flex" justifyContent="center" alignItems="center" height={1} width={1}>
        <Box bgcolor="white" px={4} boxShadow="1">
          <Box my={2}>
            <TextField
              label="Challenge"
              type="text"
              onChange={(event) => {
                dispatch({type: CHANGE_CHALLENGE, payload: event.target.value});
              }}
              value={state.challenge}
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Name"
              type="text"
              onChange={(event) => {
                dispatch({type: CHANGE_NAME, payload: event.target.value});
              }}
              value={state.name}
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Password"
              type="text"
              onChange={(event) => {
                dispatch({type: CHANGE_PASSWORD, payload: event.target.value});
              }}
              value={state.password}
            />
          </Box>
          <Box textAlign="right" my={2}>
            <Button
              disabled={[Status.error, Status.submitting].includes(state.status)}
              type="submit"
              onClick={onSubmit}
              variant="contained"
              color="primary"
              disableElevation
            >
              OK
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
