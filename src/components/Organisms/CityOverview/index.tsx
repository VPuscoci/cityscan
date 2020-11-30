import React from 'react';
import {
  StyledButton,
  StyledHeading,
  StyledTemperature,
  StyledWrapper,
  StyledPlaneIcon,
} from './cityOverview.styled';
import Icon from '../../Atoms/Icon';

import CurrentForecast from '../../../data/24hForecast.json';
import FiveDayForecast from '../../../data/5dayForecast.json';

export interface ICityOverviewProps {
  city: any;
}

const CityOverview: React.FC<ICityOverviewProps> = ({ city }) => {
  const { Temperature, WeatherIcon, WeatherText } = CurrentForecast[0];
  const currentTemp = Temperature.Metric.Value;
  const currentUnit = Temperature.Metric.Unit;
  return (
    <StyledWrapper cityName={city.name}>
      <StyledTemperature>
        <StyledHeading type="h1">{city.name}</StyledHeading>
        <span>{currentTemp}</span>&#176; <span>{currentUnit}</span>
        <Icon id={WeatherIcon} text={WeatherText} />
      </StyledTemperature>

      <section>
        <StyledPlaneIcon />
      </section>

      <StyledButton linkTo={`/cities/${city.name}`} variant="primary" size="sm">
        More details
      </StyledButton>
    </StyledWrapper>
  );
};

export default CityOverview;
