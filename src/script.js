const handleClick = () => {
  const body = document.querySelector('body')
  body.innerHTML = `
  <h1>Hello World</h1>
  `

  body.style.backgroundColor = '#000'
  body.style.color = '#FFF'
}

const el = document.getElementById('btn-start')
el.addEventListener('mouseover', () => {
  el.style.position = 'absolute'
  el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`
  el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`
})
el.addEventListener('click', () => handleClick())
