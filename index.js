document.addEventListener("DOMContentLoaded", () => {
     const productsContainer = document.getElementById("products")

     fetch("https://fakestoreapi.com/products")

     .then(Response => Response.json())
     .then(products => {
        products.forEach(product => {
            const productCC = document.createElement("div");
            productCC.classList.add("product-card");

            productCC.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart">Savatchaga qo'shish</button>
            </div>
            `; 
              productsContainer.appendChild(productCC)
        });
       
     })
     .catch(error => console.error("Mahsulotlarni yuklashda xatolik bor:"))
});

