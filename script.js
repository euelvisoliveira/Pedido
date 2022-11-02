//-------- IMPLEMENTACAO EM JAVASCRIPT NORMAL------------//

// const handleClick = () => {
//   const body = document.querySelector('body')
//   body.innerHTML = `
//     <h1>Hello World</h1>
//     `

//   body.style.backgroundColor = '#000'
//   body.style.color = '#FFF'
// }
// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.getElementById('btn-start')
//   el.addEventListener('mouseover', () => {
//     el.style.position = 'absolute'
//     el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`
//     el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`
//   })
//   el.addEventListener('click', () => handleClick())
// })

//-------- IMPLEMENTACAO EM JQUERY------------//

const handleClick = () => {
  const body = $('body')
  body.html(`<h1>Hello World</h1>`)

  body.css('backgroundColor', '#000')
  body.css('color', '#FFF')
}

const startButtonInit = () => {
  const el = $('#btn-start')
  el.on('mouseover', () => {
    el.css('position', 'absolute')
    el.css('top', `${Math.floor(Math.random() * (window.innerHeight - 18))}px`)
    el.css('left', `${Math.floor(Math.random() * (window.innerWidth - 36))}px`)
  })
  el.on('click', () => handleClick())
}

const infoButtonInit = () => {
  const el = $('#btn-info')
  const elIntiallText = el.html()
  el.on('click', () => {
    if (el.html() == elIntiallText) {
      el.html('Ocultar')
    } else {
      el.html(elIntiallText)
    }

    $('#btn-start').slideToggle()
    $('.info').slideToggle()
    $('#btn-info').slideToggle()
    $('h1').slideToggle()
    $('.coracao').slideToggle()
  })
}

const slickOptions = {
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  fade: true,
  cssEase: 'linear'
}
$('.carrosel_img').slick(slickOptions)

$(document).ready(() => {
  startButtonInit()
  infoButtonInit()
})
