const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 250,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 400,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 650,
        get Sum() {
            return this.price * this.amount
        },
        get kkalSum() {
            return this.kkal * this.amount
        }
    },
}

const btn = document.querySelectorAll('.main__product-btn')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(el) {
    const parent = el.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        attribute = el.getAttribute('data-symbol')

    if (attribute == '+' && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (attribute == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }

    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Sum
    kkal.innerHTML = product[parentId].kkalSum
}



const timerHeader = document.querySelector('.header__timer-extra')

let timer = 50

function extraTimer() {
    let interval =

        setInterval(() => {
            timerHeader.innerHTML++

            if (timerHeader.innerHTML == 100) {
                clearInterval(interval)
            } else if (timerHeader.innerHTML > 80) {
                clearInterval(interval)
                extraTimer(timer)
                timer = 150
            }else if (timerHeader.innerHTML > 50) {
                clearInterval(interval)
                extraTimer(timer)
                timer = 100
            }
            else if (timerHeader.innerHTML > 95) {
                clearInterval(interval)
                extraTimer(timer)
                timer = 1000
            }


        },timer);
}

extraTimer()
const productImg = [...document.querySelectorAll('.main__product-info')]
const view = document.querySelector('.view')
const viewClose = document.querySelector('.view__close')

productImg.forEach(function (el) {
    el.addEventListener('dblclick', function (e) {
        let img = el.querySelector('img').getAttribute('src')
        view.classList.add('active')
        view.querySelector('img').setAttribute('src', img)
    })
})

viewClose.addEventListener('click', () => {
    view.classList.remove('active')
})












