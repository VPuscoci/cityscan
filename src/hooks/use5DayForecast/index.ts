import { useQuery } from 'react-query';
import axios from 'axios';
import { WEATHER_API_KEY, WEATHER_5DAY_ENDPOINT } from '../../config';

type TCurrentForecast = {
  locationId: string;
  metric?: Boolean;
};

const get24HForecast = async (_: any, locationId: string, metric: Boolean) => {
  const data = await axios.get(
    `${WEATHER_5DAY_ENDPOINT}/${locationId}?apikey=${WEATHER_API_KEY}&metric=${metric}&details=true`
  );

  return data;
};

export default function useCurrentForecast({
  locationId,
  metric = true,
}: TCurrentForecast) {
  const config = {
    staleTime: Infinity,
    cacheTime: Infinity,
  };
  return useQuery(
    ['get-5day-forecast', locationId, metric],
    get24HForecast,
    config
  );
}
