import axios from 'axios';
import { useQuery } from 'react-query';

const fetch = async (): Promise<any> => {
  const response = await axios.get('/');
  const data = response.data;
  return data;
};

const mock = () => {
  return Promise.resolve([
    {
      id: 1,
      text: 'Simples Nacional',
    },
    {
      id: 2,
      text: 'Lucro Real',
    },
    {
      id: 3,
      text: 'Lucro Presumido',
    },
  ]);
};

export const useRegimeQuery = () => useQuery(['regime'], mock);
