const btnEl = document.getElementById("btn-addCart")
const priceEl = document.getElementById("price")
let priceBoots = 140

priceEnable()
function priceEnable() {
    priceEl.innerText = `$${priceBoots}`
}

btnEl.addEventListener("click", function() {
    console.log("button clicked!")
})

