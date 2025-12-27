document.querySelector('.tasks__add').addEventListener('click',function(){
    if(document.querySelector('#task__input').value != ''){
        let div = document.createElement('div')
        div.className = 'task'
        let divEle = document.createElement('div')
        divEle.className = 'task__title'
        divEle.textContent = document.querySelector('#task__input').value
        div.appendChild(divEle)
        let tRemove = document.createElement('a')
        tRemove.className = 'task__remove'
        tRemove.href = '#'
        tRemove.addEventListener('click',function(event){
            document.querySelector('.tasks__list').removeChild(document.querySelectorAll('.task')[Array.from(document.querySelectorAll('.task__remove')).indexOf(event.currentTarget)])
        })
        tRemove.textContent = '×'
        div.appendChild(tRemove)
        document.querySelector('.tasks__list').appendChild(div)
        document.querySelector('#task__input').value = ''
    }
})