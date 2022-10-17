import React from 'react';
import { Pixel } from '../pixel';

import Prop from 'prop-types';

export const PixelBoar = ({ handlePaintPixel }) => {
  const pixels = 5;
  const arrPixels = Array(pixels ** 2).fill();

  return (
    <section className='pixelBoard'>
      {arrPixels.map((_,index) => <Pixel
      key={`pixel${index}`}
      handlePaintPixel={handlePaintPixel}/>)}
    </section>
  );
}

PixelBoar.propTypes = {
  handlePaintPixel: Prop.func.isRequired,
}