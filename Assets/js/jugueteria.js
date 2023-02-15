import { getData, createCards, filterProducts } from "./module/functions.js";

const container = document.getElementById("card-container")
const searchBar = document.getElementById("search-bar")

let data = getData()
data.then( (response) => {
    let toys = response.filter( (product) => product.categoria === "jugueteria")
    createCards(toys,container)

    searchBar.addEventListener( "keyup", (e) => {
        let filteredToys = filterProducts(toys, e.target.value.toLowerCase())
        createCards(filteredToys,container)
    })
})