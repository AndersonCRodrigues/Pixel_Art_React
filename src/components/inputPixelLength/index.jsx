import React from "react";

import Prop from 'prop-types';

import './style.css';

export const PixelInputLength = ({pixelLength, handlePixelLength }) => {
  return(
    <input
      className="pixelInput"
      type={'range'}
      max={40}
      min={5}
      value={pixelLength}
      onChange={handlePixelLength}
      />
  );
};


PixelInputLength.propTypes = {
  handlePixelLength: Prop.func.isRequired,
  pixelLength: Prop.number.isRequired,
}