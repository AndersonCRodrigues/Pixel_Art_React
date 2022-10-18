export const saveColors = () => {
  const pallets = document.querySelectorAll('.colorPallet');
  const pixels = document.querySelectorAll('.pixel');

  const palletColor = [];
  const pixelColor = [];

  pallets.forEach(pallet => { palletColor.push(pallet.style.backgroundColor)});
  pixels.forEach(pixel => { pixelColor.push(pixel.style.backgroundColor)});

  localStorage.removeItem('boardPallet','boardPixel');
  localStorage.setItem('boardPallet', JSON.stringify(palletColor));
  localStorage.setItem('boardPixel', JSON.stringify(pixelColor));
}

export const saveLength = (pixelLength) => {
  localStorage.setItem('pixelLength', JSON.stringify(pixelLength));
}