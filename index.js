const images = document.querySelectorAll(".img")
const modal = document.querySelector(".modal")
const closeModalBtn = modal.querySelector('.closeModal')

window.onload = scrolling // call at least once time
window.onscroll = scrolling

function scrolling() {
  const viewportHeight = window.innerHeight - window.innerHeight / 4
  images.forEach(img => {
    const imgTop = img.getBoundingClientRect().top
    if (imgTop < viewportHeight)
      img.style.animationPlayState = 'running'
  })
}

closeModalBtn.onclick = function() {
  modal.classList.remove('active')
  document.body.style.overflow = 'initial'
  
}

images.forEach(img => img.addEventListener('click', () => {
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}))