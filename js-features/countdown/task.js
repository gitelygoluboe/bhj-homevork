let timer = document.querySelector('#timer')
let time = Number(timer.textContent)
let tick = setInterval(()=>{
    time--
    timer.textContent = time
},1000)
let end = setTimeout(()=>{
    clearInterval(tick)
    alert('Вы победили в конкурсе')
},time*1000)