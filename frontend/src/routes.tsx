import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link as RouterLink,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Home from './pages/Home';
import Info from './pages/Info';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';

const Layout: React.FC = ({children}) => {
  const {push} = useHistory();

  const logout = () => {
    localStorage.removeItem('challenge');
    localStorage.removeItem('team');
    push('/');
  };

  return (
    <Box>
      <Box display="flex" padding="16px 32px" justifyContent="space-between">
        <Box display="flex" justifyContent="flex-start" alignItems="flex-end">
          <Link component={RouterLink} to="/challenge">
            <h2 style={{margin: 0}}>Coding.Waterkant Challenge C10</h2>
          </Link>
          <Box mx={2} />
          <Link component={RouterLink} to="/challenge/info">
            Infos
          </Link>
          <Box mx={1} />
          <Link component={RouterLink} to="/challenge/leaderboard">
            Leaderboard
          </Link>
        </Box>
        <Button type="button" onClick={logout}>
          Logout
        </Button>
      </Box>
      {children}
    </Box>
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/challenge">
          <ChallengeRoutes />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

const ChallengeRoutes = () => {
  let {path, url} = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route path={`${url}/info`}>
          <Info />
        </Route>
        <Route path={`${url}/leaderboard`}>
          <Leaderboard />
        </Route>
        <Route exact path={path}>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
};

export default Routes;
