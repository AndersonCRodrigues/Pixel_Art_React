import React from 'react';
import { Pixel } from '../pixel';

import Prop from 'prop-types';

export const PixelBoard = ({ handlePaintPixel, pixelLength }) => {
  // const pixels = 5;
  
  const arrPixels = Array(pixelLength ** 2).fill();

  return (
    <section className='pixelBoard'
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${400 / pixelLength}px, 1fr))`}}>
      {arrPixels.map((_,index) => <Pixel
      key={`pixel${index}`}
      handlePaintPixel={handlePaintPixel}
      pixels={pixelLength}
      />)}
    </section>
  );
}

PixelBoard.propTypes = {
  handlePaintPixel: Prop.func.isRequired,
  pixelLength: Prop.number.isRequired,
}