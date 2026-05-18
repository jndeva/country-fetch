async function getCardCountry(name) {
    const content = document.querySelector("#content")
    const card = document.createElement("div")
    const flag = document.createElement("img")
    const fullCountryName = document.createElement("h1")
    const denomCountryName = document.createElement("h3")
    const capitalCountry = document.createElement('h3')

    card.classList.add("card")

    fullCountryName.textContent = name.altSpellings[1]
    denomCountryName.textContent = name.altSpellings[0]
    capitalCountry.textContent = name.capital[0]
    flag.src = name.flags.svg


    card.appendChild(fullCountryName)
    card.appendChild(denomCountryName)
    card.appendChild(capitalCountry)
    card.appendChild(flag)

    content.appendChild(card)
}


export default getCardCountry