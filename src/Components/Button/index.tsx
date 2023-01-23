import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styles';

type ButtonProps = {
  loading?: boolean;
  label: string;
  onClick: () => void;
};

const BtnLoader = () => (
  <div className="loader">
    <div className="loader-inner line-scale">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

const Button = ({ loading = false, label, onClick }: ButtonProps) => {
  return <ButtonStyled onClick={onClick}>{loading ? <BtnLoader /> : label}</ButtonStyled>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
