const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

let updateInterval; // Variável para armazenar o intervalo de atualização

function updateTime() {
    const dateToday = moment();
    const hr = dateToday.format('HH');
    const min = dateToday.format('mm');
    const s = dateToday.format('ss');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

function changeTimeZone(timezone) {
    clearInterval(updateInterval); // Limpa o intervalo de atualização

    switch(timezone) {
        case 'brasilia':
            updateInterval = setInterval(updateTime, 1000); // Atualiza a cada segundo
            break;
        case 'newYork':
            updateInterval = setInterval(updateNewYorkTime, 1000); // Atualiza a cada segundo
            break;
        case 'london':
            updateInterval = setInterval(updateLondonTime, 1000); // Atualiza a cada segundo
            break;
        // Adicione mais casos conforme necessário para outros fusos horários
    }
}

function updateNewYorkTime() {
    const dateToday = moment().utcOffset('-04:00'); // Horário de Nova York (-4 horas em relação ao UTC)
    const hr = dateToday.format('HH');
    const min = dateToday.format('mm');
    const s = dateToday.format('ss');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

function updateLondonTime() {
    const dateToday = moment().utcOffset('+00:00'); // Horário de Londres (sem diferença em relação ao UTC)
    const hr = dateToday.format('HH');
    const min = dateToday.format('mm');
    const s = dateToday.format('ss');

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

// Começa atualizando o horário local a cada segundo
updateInterval = setInterval(updateTime, 1000);
