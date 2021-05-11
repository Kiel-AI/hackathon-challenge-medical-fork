import React, {useEffect, useState, useContext} from 'react';

import {ThemeProvider} from '@material-ui/core/styles';

import Routes from './routes';
import './index.css';
import theme from './theme';

interface IAuthContext {
  team: string;
  setTeam: React.Dispatch<React.SetStateAction<string>>;
  challenge: string;
  setChallenge: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = React.createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FunctionComponent = ({children}) => {
  const [team, setTeam] = useState('');
  const [challenge, setChallenge] = useState('');

  useEffect(() => {
    const persistedTeam = localStorage.getItem('team');
    const persistedChallenge = localStorage.getItem('challenge');

    if (persistedTeam) {
      setTeam(persistedTeam);
    }

    if (persistedChallenge) {
      setChallenge(persistedChallenge);
    }
  }, []);

  return (
    <AuthContext.Provider value={{team, setTeam, challenge, setChallenge}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('There was no AuthContext.Provider above');
  }

  return context;
};

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
