import React from "react";

import Prop from 'prop-types';

export const Pixel = ({handlePaintPixel}) => {
  return <div
  className="pixel"
  style={{ backgroundColor: "white"}}
  onClick={handlePaintPixel}
  ></div>;
};

Pixel.propTypes = {
  handlePaintPixel: Prop.func.isRequired,
}