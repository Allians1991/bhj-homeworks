
const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

products.forEach(product => {
    const productControlInc = product.querySelector('.product__quantity-control_inc');
    const productControlDec = product.querySelector('.product__quantity-control_dec');
    const productValue = product.querySelector('.product__quantity-value');
    const addToCartBtn = product.querySelector('.product__add');
    let val = Number(productValue.innerHTML);
    productControlInc.addEventListener('click', e => {
        val++
        productValue.innerText = val;
    })
    productControlDec.addEventListener('click', e => {
        if (val > 1) {
            val--;
            productValue.innerText = val;
        }
    })

    addToCartBtn.addEventListener('click', e => {
        const cartProducts = document.querySelectorAll('.cart__product');
        let cartProductsId = [];

        cartProducts.forEach((el) => {
            cartProductsId.push(el.getAttribute('data-id'))
        });
        const productIndex = cartProductsId.findIndex(id => id === product.getAttribute('data-id'));

        if (productIndex != -1) {
            const productCount = cartProducts[productIndex].querySelector('.cart__product-count');
            productCount.innerText = Number(productCount.innerText) + Number(productValue.innerText);
        } else {
            addToCart();
        }
    })

    function addToCart() {
        cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.getAttribute('data-id')}">
                <img class="cart__product-image" src="${product.querySelector('.product__image').src}">
                <div class="cart__product-count">${productValue.innerText}</div>
            </div>`)
    }
});

