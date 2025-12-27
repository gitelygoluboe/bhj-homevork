let hints = document.querySelectorAll('.has-tooltip')
let hint = document.querySelector('.tooltip')
for(let hint_button of hints){
    i.addEventListener('click',function(event){
        event.preventDefault()
        let rect = event.currentTarget.getBoundingClientRect()
        if(hint.style.left == Number(rect.x.toFixed(3))+'px' && hint.style.top == Numeber((rect.y+rect.height).toFixed(3))+'px' && hint.classList.contains('tooltip_active')){
            hint.classList.remove('tooltip_active')
        } else{
            hint.classList.add('tooltip_active')
            hint.style.left = rect.x.toFixed(3) + 'px'
            hint.style.top = (rect.y+rect.height).toFixed(3) + 'px'
            hint.textContent = event.currentTarget.title
        }
        return false
    })
}