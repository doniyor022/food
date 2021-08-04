const products = {
      plainBurger:{
                name: 'GAMBURGER',
                price: 10000,
                kcall:400,
                amount: 0,
                img: 'images/product2.jpg',
                get Sum(){
                      return this.price * this.amount
                },
                get Kcall(){
                      return this.kcall * this.amount
                }
      },
      freshBurger:{
                name: 'GAMBURDER FRASH',
                price: 20500,
                kcall: 500,
                amount: 0,
                img: 'images/product1.jpg',
                get Sum(){
                  return this.price * this.amount
            },
            get Kcall(){
                  return this.kcall * this.amount
            }
      },
      freshCombo: {
                name: 'FRESH COMBO',
                price: 31900,
                kcall: 700,
                amount: 0,
                img: 'images/product3.jpg',
                get Sum(){
                  return this.price * this.amount
            },
            get Kcall(){
                  return this.kcall * this.amount
            }
      }    
}

const btns = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function(){
            actions(this);
      })
      
}
function actions(btn){
      //elementga eng yaqin bolgan otasini orqali topib beradi
      const parent = btn.closest('.main__product')
      const num = parent.querySelector('.main__product-num')
      const parentId = parent.getAttribute('id')
      const plusOrMinus = btn.getAttribute('data-symbol')
      const price = parent.querySelector('.main__product-price span')
      const kcall = parent.querySelector('.main__product-kcall span')
      
      
      if (plusOrMinus == '+') {
            products[parentId].amount++
      }else if (plusOrMinus == '-' && num.innerHTML > 0) {
            products[parentId].amount--
      }
      
      num.innerHTML = products[parentId].amount
      price.innerHTML = products[parentId].Sum
      kcall.innerHTML = products[parentId].Kcall
}

const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')



addCart.addEventListener('click', function (){
      receipt.style.display = 'flex' 
      
      setTimeout(function()  {
            receipt.style.opacity = '1'
            receiptWindow.style.top = '10%'
            
      }, 0);
      
      let menu = ''
      let totalPrice = 0
      let totalKcall = 0
      
      for(let key in products){
            if (products [key].amount > 0) {
                  menu += `${products [key].name} ${products[key].amount}X \n`
                  totalPrice += products[key].Sum
                  totalKcall += products[key].Kcall
            }
      }
      
      receiptWindowOut.innerHTML = receiptWindowOut.innerHTML = `Purchased:\n\n${menu}\n Total price: ${totalPrice}\n total kcall:${totalKcall}`
      
} )

const receiptWindowBtn = document.querySelector('.receipt__window-btn')

// bom - browser object module == window
// dom - document object module == html
receiptWindowBtn.addEventListener('click', function(){
      console.log(location.reload());
})

const lvl =document .querySelector('.header__timer-extra')
let speed = 20
function run(){
      lvl.innerHTML++
      if(lvl.innerHTML < 50) {
          speed *=2  
      }else if(lvl.innerHTML == 75){
            speed *=2
      }
      
      if (lvl.innerHTML < 100) {
            setTimeout(function(){
                  run()
            },100);
      }
      
}
run()

const mainProductInfo = document.querySelectorAll('.main__product-info')
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')
const viewImg = view.querySelector('img')

for (let i = 0; i < mainProductInfo.length; i++) {
      mainProductInfo[i].addEventListener('dblclick', function (){
            const parent = mainProductInfo[i].closest('.main__product')
            const parentId = parent.getAttribute('id')
            view.classList.add('active')
            viewImg.setAttribute('src', products[parentId].img)
      })
      
}

viewClose.addEventListener('click', function(){
      view.classList.remove('active')
})


view.addEventListener('click', function (event) {
      if (event.target != viewImg) {
            view.classList.remove('active')
      }
  })