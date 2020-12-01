import React from 'react';
import {
  StyledButton,
  StyledHeading,
  StyledTemperature,
  StyledWrapper,
  StyledDetails,
} from './cityOverview.styled';
import Icon from '../../Atoms/Icon';
import FlightInfo from '../../Molecules/FlightInfo';

import CurrentForecast from '../../../data/24hForecast.json';
import FiveDayForecast from '../../../data/5dayForecast.json';
import FlightsData from '../../../data/flight.json';

export interface ICityOverviewProps {
  city: any;
}

const CityOverview: React.FC<ICityOverviewProps> = ({ city }) => {
  const { Temperature, WeatherIcon, WeatherText } = CurrentForecast[0];
  const currentTemp = Temperature.Metric.Value;
  const currentUnit = Temperature.Metric.Unit;
  const { fly_duration, price } = FlightsData.data[0];

  return (
    <StyledWrapper cityName={city.name}>
      <StyledTemperature>
        <StyledHeading type="h1">{city.name}</StyledHeading>
        <span>{currentTemp}</span>&#176; <span>{currentUnit}</span>
        <Icon id={WeatherIcon} text={WeatherText} />
      </StyledTemperature>

      <StyledDetails>
        <FlightInfo
          duration={fly_duration}
          price={price}
          currency={FlightsData.currency}
        />
        <FlightInfo
          duration={fly_duration}
          price={price}
          currency={FlightsData.currency}
        />
        <StyledButton
          linkTo={`/cities/${city.name}`}
          variant="secondary"
          size="sm"
        >
          More details
        </StyledButton>
      </StyledDetails>
    </StyledWrapper>
  );
};

export default CityOverview;
