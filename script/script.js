const apiKey = '0e7292031e57d5fd6ec254f6f07c0676'

document.querySelector('form#form').addEventListener('submit', (event) => {
    event.preventDefault()
})

document.querySelector('button#btn').addEventListener('keydown', function(e) {
    if(e.key === 'enter') {
        e.click()
    }
})

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
            cidade: obj.name, // ja foi
            pais: obj.sys.country, // ja foi
            temperatura: obj.main.temp, // ja foi
            temperaturaMax: obj.main.temp_max, // ja foi
            temperaturaMin: obj.main.temp_min, // ja foi
            presao: obj.main.pressure, // ja foi
            solNasc: obj.sys.sunrise, // ja foi
            solPor: obj.sys.sunset, // ja foi
            descricao: obj.weather[0].description, // ja foi
            descIcon: obj.weather[0].icon, // ja foi
            humidade: obj.main.humidity, // ja foi
            ventoVel: obj.wind.speed // ja foi
        })

    } else {
        alert(`Erro na busca: Código ${resp.status}`)
        return
    }
}

function mostrarNaTela(obj) {
    document.querySelector('h2#cidade').innerHTML = `${obj.cidade}-${obj.pais}`

    document.querySelector('p#desc').innerHTML = `${obj.descricao.toUpperCase()}`
    document.querySelector('p#temp').innerHTML = `${obj.temperatura.toFixed(1).replace('.', ',')}<sup>C°</sup>`
    document.querySelector('p#humid').innerHTML = `Humidade:${obj.humidade}%`
    document.querySelector('img#img').setAttribute('src', `https://openweathermap.org/payload/api/media/file/${obj.descIcon}.png`)

    document.querySelector('p#press').innerHTML = `Pressão: ${obj.presao}hPa`
    document.querySelector('p#tempMax').innerHTML = `Máxima: ${obj.temperaturaMax.toFixed(1).replace('.', ',')}<sup>C°</>`
    document.querySelector('p#tempMin').innerHTML = `Mínima: ${obj.temperaturaMin.toFixed(1).replace('.', ',')}<sup>C°</>`

    document.querySelector('p#ventoVel').innerHTML = `Vento: ${obj.ventoVel.toFixed(1).replace('.', ',')}Km/h`
    document.querySelector('p#solNasc').innerHTML = `${obj.solNasc}`
    document.querySelector('p#solPor').innerHTML = `${obj.solPor}`
}

function procurar() {
    apiCall()
    
}