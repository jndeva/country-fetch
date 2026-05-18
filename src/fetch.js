async function fetchingData(name) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        if (!response.ok) {
            throw new Error('Country was not found')
        }
        const data = await response.json()
        return data[0]
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default fetchingData