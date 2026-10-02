
// ==========================
// Products & Shopping Cart
// ==========================

var products = document.querySelectorAll(".list li")
var cart = document.getElementById("cart")
var ShowPrice = document.getElementById("ShowPrice")
var PriceRusilt = document.getElementById("PriceRusilt")

var totalprice = 0


// ==========================
// Add Products To Cart
// ==========================

products.forEach(function(product) {
    var buyButton = product.querySelector("button")

    buyButton.onclick = function() {
        var price = Number(product.dataset.price)
        totalprice += price


        // نسخ الكارت
        var card = product.querySelector(".card").cloneNode(true)
        // حذف الزر
        card.querySelector(".card-actions").remove()
        // انشاء زر الحذف
        var removeButton = document.createElement("button")
        removeButton.innerText = "Remove"
        removeButton.className = "btn btn-error"

        // 
        card.querySelector(".card-body").append(removeButton)


        // اضافه كارت للعربه
        cart.append(card)


        // Show Price Button
        ShowPrice.classList.remove("hidden")


        // ==========================
        // Remove Product
        // ==========================

        removeButton.onclick = function() {
            totalprice -= price
            card.remove()


            // If Cart Is Empty
            if (cart.children.length == 0) {
                totalprice = 0
                ShowPrice.classList.add("hidden")
                PriceRusilt.innerHTML = ""

            }

        }

    }

})


// ==========================
// Show Price
// ==========================

ShowPrice.onclick = function() {

    var finalprice = totalprice


    // 30% Discount
    if (totalprice >= 5000) {
        finalprice = totalprice * 0.7
        PriceRusilt.innerHTML = `
            <div class="discount-message">

                <h3>Congratulations!</h3>
                <p>Total Price: ${totalprice} EGP</p>

                <p>You got 30% discount</p>

                <p>Final Price: ${finalprice} EGP</p>

            </div>

        `

    }else {
        PriceRusilt.innerHTML = `
            <div class="discount-message">
                <p>Total Price: ${totalprice} EGP</p>
                <p>Add more products to get 30% discount!</p>
            </div>
        `
    }
}


// ==========================
// Search
// ==========================

var search = document.getElementById("search")
search.oninput = function() {
    var value = search.value.toLowerCase()
    products.forEach(function(product) {
        var name = product
            .querySelector(".card-title").innerHTML.toLowerCase()


        if (name.includes(value)) {
            product.style.display = ""
        }else {
            product.style.display = "none"
        }
    })
}


// ==========================
// Drag & Drop
// ==========================

var dragItems = document.querySelectorAll(".drag-item")
var dropBox = document.getElementById("dropBox")


dragItems.forEach(function(item) {
    item.ondragstart = function(event) {
        event.dataTransfer.setData("text", item.id)
    }
})




    dropBox.ondragover = function(event) {
        event.preventDefault()

    }


    dropBox.ondrop = function(event) {
        event.preventDefault()
        var id = event.dataTransfer.getData("text")
        var item = document.getElementById(id)
       
            dropBox.appendChild(item)
    }



















// var products = document.querySelectorAll(".list li")
// var cart = document.getElementById("cart")  
// var ShowPrice = document.getElementById("ShowPrice")
// var PriceRusilt = document.getElementById("PriceRusilt")
// var totalprice = 0

// products.forEach((product) => {
//     var buyButton = product.querySelector("button")
//     buyButton.onclick = function(){

//        var price = Number(product.dataset.price)
//        totalprice += price


//         //نسخ الكارد 
//         var card = product.querySelector(".card").cloneNode(true)
//         // حذف زر الشؤاء 
//         card.querySelector(".card-actions").remove()
//         // اضافه زر الحذف 
//         var removeButton =document.createElement("button")
//         removeButton.innerText = "Remove"
//         removeButton.className = "btn btn-error"
//         card.querySelector(".card-body").append(removeButton)

//        // اضافه كارد  للعربه
  
//         cart.append(card)

//       ShowPrice.classList.remove("hidden")
//         removeButton.onclick = function(){
//             totalprice -= price
//             card.remove()
//         }
        
//     } 
// })
 

// if(cart.children.length == 0){
//     totalprice = 0 
//     ShowPrice.classList.add("hidden")
//     PriceRusilt.innerHTML = ""
// }else{
//      var finalprice = totalprice;
    
//     if(totalprice >= 5000){
//         finalprice = totalprice * 0.7
       

//         PriceRusilt.innerHTML = `
//         <div
//              class="discount-message">
//             <h3> Congratulations! </h3>
//              <p> You got 30% discount </p>
//              <p>
//                 total: ${totalprice} EGp
//              </p>
             
//              <p>
//                 finalprice: ${finalprice} EGp
//              </p>    
//        </div>
//         `


//     }else{
//         PriceRusilt.innerHTML = `
//         <div class="discount-message">
//        <p>
//         total: ${totalprice} EGp
//        </p>
// }
//     }
//        }














 // اظهار السعر 
// ShowPrice.onclick = function(){
//     var finalprice = totalprice;
    
//     if(totalprice >= 5000){
//         finalprice = totalprice * 0.7
       

//         PriceRusilt.innerHTML = `
//         <div
//              class="discount-message">
//             <h3> Congratulations! </h3>
//              <p> You got 30% discount </p>
//              <p>
//                 total: ${totalprice} EGp
//              </p>
             
//              <p>
//                 finalprice: ${finalprice} EGp
//              </p>    
//        </div>
//         `


//     }else{
//         PriceRusilt.innerHTML = `
//         <div class="discount-message">
//        <p>
//         total: ${totalprice} EGp
//        </p>
//        <p>
//        Add more products to get 30% discount!
//        </p>
//        `
//     }
 
// }


// var search = document.getElementById("search")

// search.oninput = function (){
//     var value = search.value.toLowerCase()
//     products.forEach(function(product){
//         var name = product.querySelector(".card-title").innerHTML.toLowerCase()
//         if (name.includes(value)){
//             product.style.display = ""
    
//         }else{
//            product.style.display = "none"

//         }
        
//     })

    
// }

// var dragItems = document.querySelectorAll(".drag-item")
// var dropBox = document.getElementById("dropBox")

// dragItems.forEach(function(item) {
//     item.ondragstart = function(event) {
//         event.dataTransfer.setData("text", item.id)

//     }

// })


// dropBox.ondragover = function(event) {
//     event.preventDefault()

// }


// dropBox.ondrop = function(event) {
//     event.preventDefault()
//     var id = event.dataTransfer.getData("text")
//     var item = document.getElementById(id)
//     dropBox.appendChild(item)

// } 