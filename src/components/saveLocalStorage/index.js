export const saveLS = () => {
  const boardPallet = document.querySelector('.boardPallet').innerHTML;
  const boardPixel = document.querySelector('.boardPixel').innerHTML;

  localStorage.setItem('boardPallet', boardPallet);
  localStorage.setItem('boardPixel', boardPixel);
}