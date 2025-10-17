let navber=document.getElementById("navber");
let showber=document.getElementById("minuo");
showber.addEventListener("click",function(){
navber.classList.toggle("agtiv")
    showber.classList.toggle("fa-bars"); 
  showber.classList.toggle("fa-xmark"); 

});
function phone(phone){
  let imgdetels=document.getElementById("img-deff")
    imgdetels.src=phone
}
let showcar=document.getElementById("showcar")
let showu =document.getElementById("showu")
let car=document.querySelector(".card")
showcar,showu.addEventListener("click",function(){
  car.classList.toggle("show")
})
showcar.addEventListener("click",function(){
  car.classList.toggle("show")
})

// -----------------------------
//  كود السله
// -----------------------------
const cartIcons = document.querySelectorAll(".fa-cart-shopping");
const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.querySelector(".price_card_total");
const cartCountText = document.querySelector(".top_card h3 span");

let totalPrice = 0;
let totalItems = 0;

cartIcons.forEach(icon => {
  icon.addEventListener("click", (e) => {
    // تحديد المنتج
    const productBox = e.target.closest(".box");
    const productName = productBox.querySelector("h6:nth-of-type(2)").textContent;
    const productPriceText = productBox.querySelector("h4").textContent.replace("$", "");
    const productPrice = parseFloat(productPriceText);
    const productImg = productBox.querySelector("img").getAttribute("src");

    // إنشاء عنصر المنتج في السلة
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-prod");
    itemDiv.innerHTML = `
      <img src="${productImg}" alt="">
      <div class="contentt">
        <h4>${productName}</h4>
        <p class="price_card">$${productPrice}</p>
        <div class="quantity_control">
          <button class="decrease_quantity">-</button>
          <span class="quantity">1</span>
          <button class="increase_quantity">+</button>
        </div>
      </div>
      <button class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
    `;

    // أضف للسلة
    cartContainer.appendChild(itemDiv);

    // حدث الإجمالي
    totalPrice += productPrice;
    totalItems++;
    updateCart();

    //  زر الحذف
    const deleteBtn = itemDiv.querySelector(".delete_item");
    deleteBtn.addEventListener("click", () => {
      const qty = parseInt(itemDiv.querySelector(".quantity").textContent);
      totalPrice -= (productPrice * qty);
      totalItems -= qty;
      itemDiv.remove();
      updateCart();
    });

    //التحكم في الكمية
    const decreaseBtn = itemDiv.querySelector(".decrease_quantity");
    const increaseBtn = itemDiv.querySelector(".increase_quantity");
    const qtySpan = itemDiv.querySelector(".quantity");

    increaseBtn.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      qty++;
      qtySpan.textContent = qty;
      totalPrice += productPrice;
      totalItems++;
      updateCart();
    });

    decreaseBtn.addEventListener("click", () => {
      let qty = parseInt(qtySpan.textContent);
      if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
        totalPrice -= productPrice;
        totalItems--;
        updateCart();
      }
    });
  });
});

// تحديث الإجمالي وعدد العناصر
function updateCart() {
  totalPriceEl.textContent = `$${totalPrice}`;
  cartCountText.textContent = `(${totalItems} item${totalItems > 1 ? 's' : ''} in cart)`;
};

let reivbox=document.getElementById("reiv-box");
let input=document.getElementById("input");
let arrrinput=document.getElementById("description");
let errrmasg=document.querySelector(".erorr-massge");
let btnadd=document.getElementById("btn");

btnadd.addEventListener("click",function(){
  if(input.value.trim()!=="" && arrrinput.value.trim()!==""){
    let h5=document.createElement("h5");
     h5.textContent=input.value;
     let p=document.createElement("p")
     p.textContent=arrrinput.value;
     let del =document.createElement("button");
     del.textContent ="del";
     del.addEventListener("click",function(){
      h5.remove();
      p.remove();
      del.remove();
     })
     reivbox.appendChild(h5);
     reivbox.appendChild(p);
     reivbox.appendChild(del);
     input.value="";
     arrrinput.value="";
  }else{
      errrmasg.style.display="block";
  }
});

