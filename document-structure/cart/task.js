let dec = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
let inc = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
let value = Array.from(document.querySelectorAll('.product__quantity-value'))
let product = Array.from(document.querySelectorAll('.product'))
let addItem = Array.from(document.querySelectorAll('.product__add'))
let images = Array.from(document.querySelectorAll('.product__image'))
for(let i = 0; i < product.length; i++){
    dec[i].addEventListener('click',function(event){
        value[dec.indexOf(event.currentTarget)].textContent = Number(value[dec.indexOf(event.currentTarget)].textContent)-1
    })
    inc[i].addEventListener('click',function(event){
        value[inc.indexOf(event.currentTarget)].textContent = Number(value[inc.indexOf(event.currentTarget)].textContent)+1
    })
    addItem[i].addEventListener('click',function(event){
        let div = document.createElement('div')
        div.className = 'cart__product'
        div.setAttribute('dataId',product[addItem.indexOf(event.currentTarget)].getAttribute('data-id'))
        let img = document.createElement('img')
        img.className = 'cart__product-image'
        img.src = images[addItem.indexOf(event.currentTarget)].src
        div.appendChild(img)
        let div1 = document.createElement('div')
        div1.className = 'cart__product-count'
        div1.textContent = value[addItem.indexOf(event.currentTarget)].textContent
        div.appendChild(div1)
        let parent = document.querySelector(`[dataId="${addItem.indexOf(event.currentTarget)+1}"]`)
        console.log(`[dataId="${addItem.indexOf(event.currentTarget)}"]`)
        console.log(document.querySelector(`[dataId="${addItem.indexOf(event.currentTarget)}"]`))
        if(parent == null){
            document.querySelector('.cart__products').appendChild(div)
        } else{
            parent.replaceWith(div)
        }
        
    })
}
