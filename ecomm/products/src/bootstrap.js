import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  //  document.querySelector("#dev-products").innerHTML = products;
  el.innerHTML = products;
};

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-products");
    if(el) {
        mount(el);
        }
}

export { mount };
