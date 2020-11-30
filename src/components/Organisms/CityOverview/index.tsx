import React from 'react';
import Heading from '../../Atoms/Heading';

export interface ICityOverviewProps {
  city: any;
}

const CityOverview: React.FC<ICityOverviewProps> = ({ city }) => {
  return <Heading type="h1">{city.name}</Heading>;
};

export default CityOverview;
