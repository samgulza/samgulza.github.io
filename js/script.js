window.onload = function() {
  setTimeout(function() {
    document.querySelector('.splash-screen').style.opacity = '0';
    setTimeout(function() {
      document.querySelector('.splash-screen').style.display = 'none';
      document.querySelector('.container').style.display = 'flex';
    }, 500);
  }, 2000);
}
if (submenu.classList.contains('open')) {
  submenu.style.maxHeight = null;
  submenu.classList.remove('open');
} else {
  // 다른 서브메뉴 닫기 (선택 사항)
  var allSubmenus = document.querySelectorAll('.submenu');
  allSubmenus.forEach(function(otherSubmenu) {
    otherSubmenu.style.maxHeight = null;
    otherSubmenu.classList.remove('open');
  });
  submenu.style.maxHeight = submenu.scrollHeight + "px";
  submenu.classList.add('open');
}
