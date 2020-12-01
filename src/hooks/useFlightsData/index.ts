import { useQuery } from 'react-query';
import axios from 'axios';

type TFlightsData = {
  from: string;
  to: string;
  startDate: TDate;
};

const getFlights = async (_: any, from: string, to: string, date: string) => {
  const data = await axios.get(
    `https://api.skypicker.com/flights?flyFrom=${from}&to=${to}&dateFrom=${date}&partner=picky&v=3&limit=1&sort=quality`
  );

  return data;
};

export default function useFlightsData({ from, to, startDate }: TFlightsData) {
  const { day, month, year } = startDate;
  const formattedDate = `${day}/${month}/${year}`;

  return useQuery(['list-flights', from, to, formattedDate], getFlights);
}
