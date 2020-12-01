import React from 'react';
import {
  StyledButton,
  StyledWrapper,
  StyledDetails,
} from './cityOverview.styled';
import FlightDetails from '../../Organisms/FlightDetails';
import DayForecast from '../../Organisms/DayForecast';

import CitiesData from '../../../data/cityData.json';
import Heading from '../../Atoms/Heading';

export interface ICityOverviewProps {
  city: any;
}

const CityOverview: React.FC<ICityOverviewProps> = ({ city }) => {
  const favoriteCity = CitiesData.popular_places[0];

  return (
    <StyledWrapper cityName={city.name}>
      <DayForecast locationId={city.weather_key} city={city.name}></DayForecast>
      <StyledDetails>
        <Heading type="h3">Average flight price to London:</Heading>
        <FlightDetails from={city.city_code} to={favoriteCity.city_code} />
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
