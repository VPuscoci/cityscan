import React from 'react';
import Icon from '../../Atoms/Icon';
import { StyledHeading, StyledTemperature } from './dayForecast.styled';
import useCurrentForecast from '../../../hooks/useCurrentForecast';
import Loader from '../../Atoms/Loader';

export interface IDayForecastProps {
  locationId: string;
  city: string;
}

const DayForecast: React.FC<IDayForecastProps> = ({ locationId, city }) => {
  const { data, status } = useCurrentForecast({
    locationId,
  });

  const { Temperature, WeatherIcon, WeatherText } = data?.data[0] || {};
  const currentTemp = Temperature?.Metric.Value;
  const currentUnit = Temperature?.Metric.Unit;
  return (
    <StyledTemperature>
      <StyledHeading type="h1">{city}</StyledHeading>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <></>
      ) : (
        <>
          <span>{currentTemp}</span>&#176; <span>{currentUnit}</span>
          <Icon id={WeatherIcon} text={WeatherText} />
        </>
      )}
    </StyledTemperature>
  );
};

export default DayForecast;
