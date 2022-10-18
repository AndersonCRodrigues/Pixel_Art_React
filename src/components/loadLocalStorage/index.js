export const loadColors = () => {
  const pixels = document.querySelectorAll('.pixel');

  if (localStorage.boardPixel){
    const pixelColors = JSON.parse(localStorage.getItem('boardPixel'));

    pixels.forEach((pixel, index) => pixel.style.backgroundColor = pixelColors[index]);
  }
};