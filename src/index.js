import "./style.css"
import fetchingData from "./fetch.js"
import getCardCountry from "./components/card.js"

const input = document.querySelector("input")
const btn = document.querySelector("button")
const header = document.querySelector("header")
const errMessage = document.createElement('h2')

errMessage.classList.add('error')

async function getCountry() {
    errMessage.textContent = ""
    try {
        const data = await fetchingData(input.value)
        console.log(data)
        getCardCountry(data)
    } catch (err) {
        errMessage.textContent = err.message
        header.appendChild(errMessage)
    }
}

btn.addEventListener('click', getCountry)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getCountry()
    }
})