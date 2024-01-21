export const cart = [];

export function addToCart(productid) {

  let matchingitem;

  cart.forEach((cartitem) => {
    if (productid === cartitem.productid) {
      matchingitem = cartitem;
    }
  });

  if (matchingitem) {
    matchingitem.quantity += 1;
  } else {
    cart.push({
      productid: productid,
      quantity: 1
    });
  }

}