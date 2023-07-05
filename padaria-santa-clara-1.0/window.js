window.addEventListener('scroll', function() {
    var element = document.querySelector('.fixed-element');
    var rect = element.getBoundingClientRect();
    
    if (rect.top <= 0) {
      element.classList.add('fixed');
    } else {
      element.classList.remove('fixed');
    }
  });
  