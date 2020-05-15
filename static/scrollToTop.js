var backToTopBtn = document.getElementById('backToTop')

window.onscroll = function() {
  var scrollTop = window.pageYOffset
  if (scrollTop > 400) {
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = 'none'
  }
}

backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
