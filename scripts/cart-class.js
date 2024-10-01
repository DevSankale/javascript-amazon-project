class Cart{
  cartItems;
  localStorageKey;

  constructor(localStorageKey){
     this.localStorageKey = localStorageKey;
     this.loadFromStorage();
  }

  loadFromStorage(){
    
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
  
    if(!cart){
     cart =  [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId:'1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId:'2'
      }];
      
    };
  
  }


  saveToStorage(){
    
    localStorage.setItem(this.localStorageKey , JSON.stringify(this.cartItems))
  }
  
  

  addToCart(productId) {
    
    let matchingitem;
  
    this.cartItems.forEach((cartitem) => {
      if (productId === cartitem.productId) {
        matchingitem = cartitem;
      }
    });
  
    if (matchingitem) {
      matchingitem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1, 
        deliveryOptionId:'1'
      });
    }
  
  this.saveToStorage();
  }



  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartitem) => {
  
      if (cartitem.productId !== productId) {
        newCart.push(cartitem);
      }
    });
  
  
    this.cartItems = newCart;
    this.saveToStorage();
  }

  updateDeliveryOption(productId,deliveryOptionId){
    
    let matchingitem;
  
    this.cartItems.forEach((cartitem) => {
      if (productId === cartitem.productId) {
        matchingitem = cartitem;
      }
    });
  
  
    matchingitem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
 
   

}



const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');



console.log(cart);
console.log(businessCart);



 


