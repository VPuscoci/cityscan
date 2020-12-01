import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CitiesData from '../../../data/cityData.json';
import CityOverview from '../../Organisms/CityOverview';

export interface CitiesProps {}
const StyledWrapper = styled.main`
  ${tw``}
`;

const Cities: React.FC<CitiesProps> = () => {
  return (
    <StyledWrapper>
      {CitiesData.destionations.map((city, i) => {
        return <CityOverview key={i} city={city} />;
      })}
    </StyledWrapper>
  );
};

export default Cities;
