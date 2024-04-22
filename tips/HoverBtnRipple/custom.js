const btn = document.querySelector('.btn')

btn.addEventListener('mouseover', (e) => {
  let x = e.pageX - btn.offsetLeft;
  let y = e.pageY - btn.offsetTop;

  btn.style.setProperty('--xPos', x + 'px')
  btn.style.setProperty('--yPos', y + 'px')
})