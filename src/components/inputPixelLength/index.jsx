import React from "react";

import Prop from 'prop-types';

export const PixelInputLength = ({pixelLength, handlePixelLength }) => {
  return(
    <input
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