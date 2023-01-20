const images = document.querySelectorAll(".img")

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