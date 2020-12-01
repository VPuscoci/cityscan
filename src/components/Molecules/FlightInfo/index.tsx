import React from 'react';
import { StyledPlaneIcon, StyledWrapper } from './flightsInfo.styled';

export interface IFlightInfoProps {
  duration: string;
  price: number;
  currency: string;
}

const FlightInfo: React.FC<IFlightInfoProps> = ({
  duration,
  price,
  currency,
}) => {
  return (
    <StyledWrapper>
      <StyledPlaneIcon />
      <span>{duration}</span> -{' '}
      <span>
        {price} {currency}
      </span>
    </StyledWrapper>
  );
};

export default FlightInfo;
