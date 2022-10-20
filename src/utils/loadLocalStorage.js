export const loadColors = () => {
  const pixels = document.querySelectorAll('.pixel');

  const pixelColors = JSON.parse(localStorage.getItem('boardPixel')) || 'white';

  pixels.forEach((pixel, index) => pixel.style.backgroundColor = pixelColors[index]);
};

export const loadPalletColor = () => JSON.parse(localStorage.getItem('boardPallet')) || null;