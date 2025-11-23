let tabs = document.querySelectorAll('.tab')
let tabs_content = document.querySelectorAll('.tab__content')
for(let t of tabs){
    t.addEventListener('click',function(){
        choose([...tabs].indexOf(this))
    })
}
function choose(num){
    for(let k of tabs){
        k.classList.remove('tab_active')
    }
    for(let k of tabs_content){
        k.classList.remove('tab__content_active')
    }
    tabs[num].classList.add('tab_active')
    tabs_content[num].classList.add('tab__content_active')
}