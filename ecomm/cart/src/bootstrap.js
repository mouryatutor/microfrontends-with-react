import faker from "faker";

const mount = (el) => {
    let carts = `<div>You have ${faker.random.number()} items in your cart </div>`
    // document.querySelector('#dev-carts').innerHTML = carts;
    el.innerHTML = carts;
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-carts');
    if(el) {
        mount(el);
    }
}

export { mount }