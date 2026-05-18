import "./style.css"
import fetchingData from "./fetch.js"
import getCardCountry from "./components/card.js"

const input = document.querySelector("input")
const btn = document.querySelector("button")

async function getCountry() {
    const data = await fetchingData(input.value)
    console.log(data)
    getCardCountry(data)
}

btn.addEventListener('click', getCountry)