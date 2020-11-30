import React from 'react';
import CitiesData from '../../../data/cityData.json';
import CityOverview from '../../Organisms/CityOverview';

export interface CitiesProps {}

const Cities: React.FC<CitiesProps> = () => {
  return (
    <main>
      {CitiesData.map((city) => {
        return <CityOverview city={city} />;
      })}
    </main>
  );
};

export default Cities;