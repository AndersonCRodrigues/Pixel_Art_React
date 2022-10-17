export const whiteColor = () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => pixel.style.backgroundColor = '#fff');
};
