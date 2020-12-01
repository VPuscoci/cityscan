import React from 'react';
import useFlightsData from '../../../hooks/useFlightsData';
import useDate from '../../../hooks/useCurrentDate';
import { StyledPlaneIcon, StyledWrapper } from './flightDetails.styled';

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

  const { flyDuration, flyFrom, flyTo, price, deep_link } =
    data?.data.data[0] || {};
  return (
    <StyledWrapper>
      {status === 'loading' ? (
        'Fetching flight info'
      ) : status === 'error' || !price ? (
        <span>Sorry, we cannot get the fight information</span>
      ) : (
        <>
          <span>{flyFrom} </span>
          <StyledPlaneIcon />
          <span>{flyTo}</span>{' '}
          <span>
            {flyDuration} - {price} EUR
          </span>
        </>
      )}
    </StyledWrapper>
  );
};

export default FlightDetails;
