export const saveColors = () => {
  const pixels = document.querySelectorAll('.pixel');

  const pixelColor = [];

  pixels.forEach(pixel => { pixelColor.push(pixel.style.backgroundColor)});

  localStorage.removeItem('boardPixel');
  localStorage.setItem('boardPixel', JSON.stringify(pixelColor));
};

export const saveLength = (pixelLength) => {
  localStorage.setItem('pixelLength', JSON.stringify(pixelLength));
};

export const savePalletColor = (colors) => {
  if(colors) {
      localStorage.removeItem('boardPallet');
  localStorage.setItem('boardPallet', JSON.stringify(colors));
  }
};