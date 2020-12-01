import React from 'react';
import useFlightsData from '../../../hooks/useFlightsData';
import useDate from '../../../hooks/useCurrentDate';
import Loader from '../../Atoms/Loader';
import {
  StyledPlaneIcon,
  StyledWrapper,
  StyledDuration,
  StyledFlightPath,
  StyledPrice,
} from './flightDetails.styled';

export interface IFlightDetailsProps {
  from: string;
  to: string;
}

const FlightDetails: React.FC<IFlightDetailsProps> = ({ from, to }) => {
  const { status, data, error, isFetching } = useFlightsData({
    from,
    to,
    startDate: useDate(),
  });

  const { fly_duration, flyFrom, flyTo, price, deep_link } =
    data?.data.data[0] || {};
  return (
    <StyledWrapper>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' || !price ? (
        <span>Sorry, we cannot get the fight information</span>
      ) : (
        <>
          <StyledFlightPath>
            {flyFrom} <StyledPlaneIcon /> {flyTo}
          </StyledFlightPath>
          <StyledDuration>Duration: {fly_duration}</StyledDuration>
          <StyledPrice>{price} EUR</StyledPrice>
        </>
      )}
    </StyledWrapper>
  );
};

export default FlightDetails;
