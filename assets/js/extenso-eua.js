const year = document.getElementById('anos')
const month = document.getElementById('meses');
const day = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function () {
    let dateToday = new Date();
    let y = dateToday.getFullYear();
    let m = dateToday.getMonth() + 1; // +1 para obter o valor do mês correto (de 1 a 12).
    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Formata os minutos e segundos para adicionar zero à esquerda se necessário.

    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    // Mapeia os valores de mês e dia da semana para os nomes abreviados.
    
    const mesesExtenso = 
    ['January', 'February', 'March',
     'April', 'May', 'June',
      'July', 'August', 'September',
       'October', 'November', 'December'];

    const diasExtenso = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    year.textContent = y;
    month.textContent = mesesExtenso[m - 1]; // Subtrai 1 para obter o índice correto no array.
    day.textContent = diasExtenso[dateToday.getDay()];
    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = s;
    
}, 1000); // Atualiza a cada segundo (1000 milissegundos = 1 seg).