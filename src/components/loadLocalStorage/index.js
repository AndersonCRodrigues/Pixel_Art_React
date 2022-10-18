export const loadColors = () => {
  const pallets = document.querySelectorAll('.colorPallet');
  const pixels = document.querySelectorAll('.pixel');

  const palletColors = JSON.parse(localStorage.getItem('boardPallet'));
  const pixelColors = JSON.parse(localStorage.getItem('boardPixel'));

  pallets.forEach((pallet, index) => pallet.style.backgroundColor = palletColors[index]);
  pixels.forEach((pixel, index) => pixel.style.backgroundColor = pixelColors[index]);
};