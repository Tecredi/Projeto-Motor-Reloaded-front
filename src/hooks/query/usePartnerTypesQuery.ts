import axios from 'axios';
import { useQuery } from 'react-query';

const fetchPartnerTypes = async (): Promise<any> => {
  const response = await axios.get('/api/partner-types');
  const data = response.data;
  return data;
};

const mock = () => {
  return Promise.resolve([
    {
      id: 1,
      text: 'Lojista / Garagista',
    },
    {
      id: 2,
      text: 'Parceiro Comercial',
    },
  ]);
};

export const usePartnerTypesQuery = () => useQuery(['partner-types'], mock);
