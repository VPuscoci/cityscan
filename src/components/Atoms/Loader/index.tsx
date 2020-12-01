import React from 'react';
import ReactLoader from 'react-loader-spinner';

export interface ILoaderProps {}

const Loader: React.FC<ILoaderProps> = () => {
  return (
    <ReactLoader type="ThreeDots" color="#DDDDDD" height={28} width={28} />
  );
};

export default Loader;
