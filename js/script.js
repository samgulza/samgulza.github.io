window.onload = function() {
  setTimeout(function() {
    document.querySelector('.splash-screen').style.opacity = '0';
    setTimeout(function() {
      document.querySelector('.splash-screen').style.display = 'none';
      document.querySelector('.container').style.display = 'flex';
    }, 500);
  }, 2000);
}
