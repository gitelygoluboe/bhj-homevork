let list_href = document.querySelectorAll('.dropdown__item a')
document.querySelector('.dropdown__value').onclick = () => {
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')
}
for(let i of list_href){
    i.addEventListener('click',function(e){
        e.preventDefault()
        choose(this.textContent)
    })
}
function choose(lang){
    document.querySelector('.dropdown__value').textContent = lang
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
}