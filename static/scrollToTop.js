var backToTopBtn = document.getElementById('backToTop')

backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
