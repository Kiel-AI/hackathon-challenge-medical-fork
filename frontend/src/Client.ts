import axios from 'axios';

const Client = () => {
  const backend =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : process.env.BACKEND_URL;

  const login = async (challenge: string, name: string, password: string) => {
    return axios.post(`${backend}/login`, {
      name,
      password,
      challenge,
    });
  };

  const submit = async (challenge: string, team: string, predictions: any) => {
    return axios.post(`${backend}/submit/${challenge}`, {
      team,
      predictions,
    });
  };

  const getScores = async (challenge: string) => {
    return axios.get(`${backend}/${challenge}`);
  };

  return {login, getScores, submit};
};

export default Client();
