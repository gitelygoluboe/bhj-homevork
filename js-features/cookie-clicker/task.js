let cliks = document.querySelector('#clicker__counter')
let cliks_count = 0
let cookie = document.querySelector('.clicker__cookie')
cookie.onclick = () => {
    cliks_count++
    cliks.innerText = cliks_count
    cookie.width='250'
    let lit = setTimeout(()=>{cookie.width='200'},200)
}