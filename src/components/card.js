async function getCardCountry(name) {
    const content = document.querySelector("#content")
    const card = document.createElement("div")
    const names = document.createElement("div")

    const flag = document.createElement("img")
    const fullCountryName = document.createElement("h1")
    const denomCountryName = document.createElement("h3")
    const capitalCountry = document.createElement("h3")
    const population = document.createElement('h3')
    const region = document.createElement('h3')
    const languages = document.createElement('h3')

    card.classList.add("card")
    names.classList.add("names")

    flag.src = name.flags.svg
    fullCountryName.textContent = name.name.common
    denomCountryName.textContent = name.fifa
    capitalCountry.textContent = `Capital: ${name.capital[0]}`
    population.textContent = `Population: ${name.population}`
    region.textContent = `Region: ${name.region}`

    names.appendChild(fullCountryName)
    names.appendChild(denomCountryName)

    card.appendChild(flag)
    card.appendChild(names)
    card.appendChild(capitalCountry)
    card.appendChild(population)
    card.appendChild(region)
    card.appendChild(languages)

    content.appendChild(card)
}


export default getCardCountry