import React from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CitiesData from '../../../data/cityData.json';
import {
  StyledButton,
  StyledWrapper,
  StyledFlights,
  StyledWeather,
  StyledHeading,
  StyledClimate,
  StyledLiving,
} from './city.styled';
import FlightDetails from '../../Organisms/FlightDetails';
import DayForecast from '../../Organisms/DayForecast';
import FiveDayForecast from '../../Organisms/5DayForecast';
import Container from '../../Atoms/Container';

export interface CityProps {}

const City: React.FC<CityProps> = () => {
  const { cityName } = useParams<Record<string, string | undefined>>();
  const cityDetails = CitiesData.destionations.find(
    (cityData) => cityData.name === cityName
  );
  const { popular_places } = CitiesData;

  if (!cityDetails) {
    return <Redirect to="/cities" />;
  }

  return (
    <StyledWrapper cityName={cityDetails.name}>
      <DayForecast
        locationId={cityDetails.weather_key}
        city={cityDetails.name}
      ></DayForecast>

      <StyledWeather>
        <Container>
          <StyledHeading type="h2">Climate information:</StyledHeading>
          <StyledClimate>{cityDetails.climate_text}</StyledClimate>
          <StyledHeading type="h3">Weekly forecast:</StyledHeading>
          <FiveDayForecast locationId={cityDetails.weather_key} />
        </Container>
      </StyledWeather>
      <StyledLiving>
        <Container>
          <p>
            {`According to Numbeo, the cost of living index is ${cityDetails.cost_of_living_index}... `}
            <a
              href={cityDetails.cost_of_living_url}
              target="_blank"
              rel="noreferrer"
            >
              see more details
            </a>
          </p>
        </Container>
      </StyledLiving>
      <StyledFlights>
        <Container>
          <StyledHeading type="h2">Popular flights info:</StyledHeading>
          {popular_places &&
            popular_places.map((place, i) => (
              <FlightDetails
                key={i}
                from={cityDetails.city_code}
                to={place.city_code}
              />
            ))}
        </Container>
      </StyledFlights>
    </StyledWrapper>
  );
};

export default City;
