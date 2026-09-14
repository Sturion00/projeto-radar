const apiKey = '0e7292031e57d5fd6ec254f6f07c0676'

async function apiCall() {
    const nomeCidade = document.getElementById('txtproc')
    
    if (!nomeCidade.value.trim()) {
        alert('informe uma cidade')
        nomeCidade.focus()
        return
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(nomeCidade.value.trim())}&appid=${apiKey}&lang=pt_br&units=metric`
    
    const resp = await fetch(url)
    if (resp.status === 200) {
        const obj = await resp.json()

        mostrarNaTela({
            cidade: obj.name,
            pais: obj.sys.country,
            temperatura: obj.main.temp,
            temperaturaMax: obj.main.temp_max,
            temperaturaMin: obj.main.temp_min,
            presao: obj.main.pressure,
            solNasc: obj.sys.sunrise,
            solPor: obj.sys.sunset,
            descricao: obj.weather[0].description,
            descIcon: obj.weather[0].icon,
            humidade: obj.main.humidity,
            ventoVel: obj.wind.speed
        })
    } else {
        alert(`Erro na busca: Código ${resp.status}`)
        return
    }
}

function mostrarNaTela(obj) {
    document.querySelector('p#desc').innerHTML = `${obj.descricao.toUpperCase()}`
    document.querySelector('p#temp').innerHTML = `Temperatura:${obj.temperatura.toFixed(1).replace('.', ',')}C°`
    document.querySelector('p#humid').innerHTML = `Humidade:${obj.humidade}%`

}

function procurar() {
    apiCall()
}