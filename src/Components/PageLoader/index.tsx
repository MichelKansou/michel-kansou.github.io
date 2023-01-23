import React from 'react';
import PropTypes from 'prop-types';
import { LoaderContainer } from './styles';

type PageLoaderProps = {
  loading?: boolean;
  children: any;
};

const LoadingComponent = () => (
  <div className="hexagon-loader">
    <ul className="hexagon-container">
      <li className="hexagon hex_1" />
      <li className="hexagon hex_2" />
      <li className="hexagon hex_3" />
      <li className="hexagon hex_4" />
      <li className="hexagon hex_5" />
      <li className="hexagon hex_6" />
      <li className="hexagon hex_7" />
    </ul>
  </div>
);

const PageLoader = ({ loading = false, children }: PageLoaderProps) => {
  return <LoaderContainer>{loading ? <LoadingComponent /> : children}</LoaderContainer>;
};

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

export default PageLoader;
