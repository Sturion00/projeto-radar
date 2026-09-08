const apiKey = '0e7292031e57d5fd6ec254f6f07c0676'
const url = `https://api.openweathermap.org/data/2.5/weather?q=marialva&appid=${apiKey}&lang=pt-br&units=metric`

async function apiCall() {
    const resp = await fetch(url)
    if (resp.status === 200) {
        const obj = await resp.json()
        console.log(obj)
    }
}

apiCall()