import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => (
  <div className="loaderDiv">
    <Loader
      type="Circles"
      color="#00BFFF"
      height={150}
      width={150}
    />
  </div>
);

export default LoaderComponent;
