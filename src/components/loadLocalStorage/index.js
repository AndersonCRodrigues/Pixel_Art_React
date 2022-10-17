export const loadLS = () => {
  if (localStorage.boardPixel && localStorage.boarPallet) {
    document.querySelector('.boardPallet').innerHTML = localStorage.getItem('boardPallet');
    document.querySelector('.boardPixel').innerHTML = localStorage.getItem('boardPixel');
  }
};