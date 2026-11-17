fetch ("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {console.log(data);
    const product = document.getElementById("productcont");

    data.forEach((product) => {
      productcont.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p class="price">$${product.price}</p>
          <p>${product.category}</p>
        </div>
      `;
    });
  })

Catch ((error) => {

    console.log("Error", error); 

})
