function REPLACE() {
  window.location.replace('https://cservice-initial.stackblitz.io');
}
function error() {
  document.querySelector('#error');
  let pass = fo.pass
  if (document.getElementById('passdiicriatio').Value == ' ') {
    document.getElementById('error').style.display = block;
  }
}
setInterval(function() {
  let novaHora = new Date();
  // getHours trará a hora
  // geMinutes trará os minutos
  // getSeconds trará os segundos
  let date = zero (novaHora.getDate());
  let month = novaHora.getMonth();
  let year = novaHora.getFullYear();
  let hora = zero (novaHora.getHours());
  let minuto = zero (novaHora.getMinutes());
  let segundo = zero (novaHora.getSeconds());
  let ms = novaHora.getMilliseconds();
  let cs = novaHora.getTime();
  // Chamamos a função zero para que ela retorne a concatenação
  // com os minutos e segundos
  minuto = minuto;
  segundo = segundo;
  // Com o textContent, iremos inserir as horas, minutos e segundos
  // no nosso elemento HTML
  document.getElementById('ho').textContent =
    hora + ':' + minuto + ':' + segundo + ':' + ms + ':' + cs + '|' + date + '/' + '07' + '/' + year;

}, 1000);
    // A function zero concatena a string (número) 0 em frente aos números
// mantendo o zero na frente dos números menores que 10. Exemplo:
// 21:05:01
// 21:05:02
// e assim, sucessivamente
function zero(x) {
  if (x < 10) {
      x = '0' + x;
  } return x;
}
function yearError(y) {
  if (y < 1990) {
 
    y = 'Ano invalido' + y;

  }return y;
}