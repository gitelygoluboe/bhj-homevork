document.querySelector('.tasks__add').addEventListener('click',function(event){
    event.preventDefault()
    if(document.querySelector('#task__input').value.trim() != ''){
        let tasksList = document.querySelector('.tasks__list')
        
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
            <div class="task__title">
                ${document.querySelector('#task__input').value}
            </div>
            <a href="#" class="task__remove" onClick={document.querySelector('.tasks__list').removeChild(document.querySelectorAll('.task')[Array.from(document.querySelectorAll('.task__remove')).indexOf(event.currentTarget)]);event.preventDefault()}>&times;</a>
            </div>
        `);
        document.querySelector('#task__input').value = ''
    }
})