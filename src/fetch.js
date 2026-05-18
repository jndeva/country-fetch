async function fetchingData(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json()
    return data[0]
}

export default fetchingData