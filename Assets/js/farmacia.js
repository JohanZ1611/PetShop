import { getData, createCards, filterProducts } from "./module/functions.js";

const container = document.getElementById("card-container")
const searchBar = document.getElementById("search-bar")

let data = getData()
data.then( (response) => {
    let pharmacyProducts = response.filter( (product) => product.categoria === "farmacia")
    createCards(pharmacyProducts,container)

    searchBar.addEventListener( "keyup", (e) => {
        let filteredPharmacyProducts = filterProducts(pharmacyProducts, e.target.value.toLowerCase())
        createCards(filteredPharmacyProducts,container)
    })
})