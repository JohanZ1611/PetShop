export async function getData() {
  try {
      const response = await fetch("https://mindhub-xj03.onrender.com/api/petshop")
      const data = await response.json()
      return data
  }
  catch (error) {
      console.log(`Error: ${error}`)
  }
}

export function createCards(list, container) {
  container.innerHTML = ""
  let aux = ""
  for (let element of list) {
      aux += writeCard(element)
  }
  container.innerHTML += aux
}

export function writeCard(element) {
  let color = element.disponibles < 5 ? "red" : "green";
  return `
    <div class="card" style="width: 18rem;">
        <div>
            <img src="${element.imagen}"class="card-img-top tam_img_card" alt="${element.producto}">
            <button class="favorite-btn"><img src="../img/heart-svgrepo-com.png" class="img-heart" alt="heart"></button>
        </div>
        <div class="card-body ">
            <div class="cont-stock d-flex flex-column">
                <p class="card-text"><b>Price: $${element.precio}</b></p>
                <p class=" ${color} text-center stock"><b>Stock</b></p>
                <h5 >${element.producto}</h5>
            </div>
            <div class="cont-unidad d-flex justify-content-end align-items-end">
                <p>${element.disponibles} Unidades</p>
            </div>
        </div>
    </div>
    `
}


export function filterProducts(products, value){
  return products.filter( (product) => product.producto.toLowerCase().includes(value))
}