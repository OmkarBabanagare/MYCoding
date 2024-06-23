const hamburger = document.getElementById("button1");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("button2");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
    if (parseInt(searchBox.style.top) == 72) {
      searchBox.style.top = '24px';
      searchBox.style.display = 'none';
    } else {
      searchBox.style.top = '72px';
      searchBox.style.display = 'block';
    }
  });

  hamburger.addEventListener('click',function(){
    if (slideoutMenu.style.opacity=="1") {
      slideoutMenu.style.opacity = '0';
      slideoutMenu.style.pointerEvents = 'none';  
    } else {
        slideoutMenu.style.opacity = "1";
        slideoutMenu.style.pointerEvents = 'auto';    
    }
  });
