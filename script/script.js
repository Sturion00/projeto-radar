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
        console.log(obj)
        alert('OK')
    } else {
        alert(`Erro na busca: Código ${resp.status}`)
    }
}

function procurar() {
    apiCall()
}