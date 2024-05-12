function relogio() {
    let display = document.querySelector('.display')

    let agora = new Date()
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    display.textContent = corrigirRelogio(horas) + ':' + corrigirRelogio(minutos) + ':' + corrigirRelogio(segundos)

    function colorBody() {
        if(horas >= 6 && horas <= 11) {
            let body = document.body
            body.style.backgroundColor = '#87CEEB'
        } else if (horas >= 12 && horas <= 17) {
            let body = document.body
            body.style.backgroundColor = '#FFA500'
        } else if (horas >= 18 && horas <= 23) {
            let body = document.body
            let color = document.querySelector('#footer')
            color.style.color = 'white'
            body.style.backgroundColor = '#191970'
        } else if (horas >= 0 && horas <= 5) {
            let body = document.body
            let color = document.querySelector('#footer')
            color.style.color = 'white'
            body.style.backgroundColor = '#191970'
        }
    }
    colorBody()
}

function corrigirRelogio(num) {
    if(num < 10) {
        num = '0' + num
    }
    return num
}


setInterval(relogio)