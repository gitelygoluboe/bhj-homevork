let dead = document.querySelector('#dead')
let lost = document.querySelector('#lost')
let dead_count=0
let lost_count = 0
for(let i = 1; i < document.querySelectorAll('.hole').length+1;i++){
    let hole = document.querySelector(`#hole${i}`)
    hole.onclick = () => {
        if(document.querySelector(`#hole${i}`).className.split(' ').indexOf('hole_has-mole') != -1){
            dead_count++
        } else{
            lost_count++
        }
        if(dead_count == 10){
            alert('Победа!')
            dead_count = 0
            lost_count = 0
        }
        if(lost_count == 5){
            alert('Вы проиграли')
            dead_count = 0
            lost_count = 0
        }
        dead.textContent=dead_count
        lost.textContent=lost_count
    }
}