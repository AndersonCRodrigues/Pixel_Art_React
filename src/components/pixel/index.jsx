import React from "react";

import Prop from 'prop-types';

export const Pixel = ({handlePaintPixel, pixels }) => {
  const pixelLength = 400 / pixels;
  return <div
  className="pixel"
  style={{ backgroundColor: "white", width: pixelLength, height: pixelLength }}
  onClick={handlePaintPixel}
  ></div>;
};

Pixel.propTypes = {
  handlePaintPixel: Prop.func.isRequired,
  pixels: Prop.number.isRequired,
}