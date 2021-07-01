let product= [{ 

  name: "IPHONE 6S+", 
  brand: "apple", 
  description: "CAPACITY: 16GB, NO CARD SLOT", 
  price: "P12,200.00",
  photoimg:"iphone6s.jpg"
  
  }, 
  { 
  
  name: "IPHONE 7", 
  brand: "apple", 
  description: "CAPACITY: 32GB, NO CARD SLOT", 
  price: "17,737.00",
  photoimg:"iphone7.jpg"
  
  }, 
  
  { 
  
  name: "IPHONE 8", 
  brand: "apple", 
  description: "CAPACITY: 64GB, NO CARD SLOT", 
  price: "P22,000.00", 
  photoimg: "iphone8.jpg"
  
  }, 
  { 
  
    name: "IPHONE X", 
    brand: "apple", 
    description: "CAPACITY: 64GB, NO CARD SLOT", 
    price: "P24,990.00", 
    photoimg: "iphonex.jpg"
    
    } ,
  { 
  
  name: "IPHONE 11", 
  brand: "apple", 
  description: "CAPACITY: 64GB, NO CARD SLOT", 
  price: "P36,000.00", 
  photoimg: "iphone11.jpg"
  
  },
  { 
  
    name: "IPHONE 12", 
    brand: "apple", 
    description: "CAPACITY: 128GB, NO CARD SLOT", 
    price: "P57,635.00", 
    photoimg: "iphone12.jpg"
    
    },
    { 
  
      name: "IPAD PRO", 
      brand: "apple", 
      description: "CAPACITY: 128GB, NO CARD SLOT", 
      price: "P52,314.00", 
      photoimg: "ipadpro.jpg"
      
      },
      { 
  
        name: "IPAD 4TH GEN", 
        brand: "apple", 
        description: "CAPACITY: 32GB, NO CARD SLOT", 
        price: "P30,160.00", 
        photoimg: "ipad4thgen.jpg"
        
        },
  ] 

var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('iphoneProduct').innerHTML = `${product.map(function (content) {
  return `
  <div class="card">
  <img src="${content.photoimg}" class="photo" alt="Iphone" style="width: 80%" style=" height:85%">
  <div class="title">${content.name}</div>
  <h4>${content.description}</h44>
  <p class="price">${content.price}</p>
  <button class="Button" onclick="addToCart">ORDER</button>
  </div>
    `
}).join("")}`

let addButton = document.getElementsByClassName("Button");
console.log(addButton);
for (let i = 0; i < addButton.length; i++) {
    let button = addButton[i];
    button.addEventListener("click", addToCartButton);
}

function addToCartButton(event) {
    let button = event.target;
    let items = button.parentElement.parentElement;
    let name = items.getElementsByClassName("title")[0].innerText;
    let price = items.getElementsByClassName("price")[0].innerText;
    let imagesrc = items.getElementsByClassName("photo")[0].src;
    addToCart(name, imagesrc, price);
    alert("Added to Cart");
}
function addToCart(name, imagesrc, price) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-content");
    let cartItems = document.getElementsByClassName("item-order")[0];
    let cartContents = `
    <div class="card cart-content">
    <div class="cart-details">
    <img class="phone-image" src="${imagesrc}" style="width:100%">
    <div class="title">${name}</div>
    <div><p class="price"> ${price}</p></div>
    </div>
    </div>`;
 
    cartRow.innerHTML = cartContents;
    cartItems.append(cartRow);
}