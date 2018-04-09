let imageText = document.querySelectorAll('.image-text')

console.log(imageText)

imageText.forEach(image => {
  image.addEventListener('mouseover', event => {
    for (let i = 1; i < event.target.children.length; i++) {
      event.target.children[i].style = 'display: block;'
    }
  })
})

imageText.forEach(image => {
  image.addEventListener('mouseout', event => {
    for (let i = 1; i < event.target.children.length; i++) {
      event.target.children[i].style = 'display: none;'
    }
  })
})
