const prompt = require('prompt-sync');

var labirinto = [
  [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]


var clc = require("cli-color");

function colorir(text) {
  if (text == 22) {
    return clc.bgRed('  ');
  } else if (text == 11) {
    return clc.bgBlue('  ');
  } else if (text == 88) {
    return clc.bgYellow('$$')
  } else {
    return clc.bgGreen('😃');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(",", ""));
  }
}

var x = 0;
var y = 5

function desce() {
  if (labirinto[x + 1][y] !== 22) {
    labirinto[x][y] = 11
    x = x + 1;
    labirinto[x][y] = 33
    contadorDesce++
  }
}

function sobe() {
  if (labirinto[x - 1][y] !== 22 && x - 1 >= 0) {
    labirinto[x][y] = 11
    x = x - 1;
    labirinto[x][y] = 33
    contadorSobe++
  }
}

function direita() {
  if (labirinto[x][y + 1] !== 22) {
    labirinto[x][y] = 11
    y = y + 1;
    labirinto[x][y] = 33
    contadorDireita++
  }
}

function esquerda() {
  if (labirinto[x][y - 1] !== 22) {
    labirinto[x][y] = 11
    y = y - 1;
    labirinto[x][y] = 33
    contadorEsquerda++;
  }
}

var contadorSobe = 0
var contadorDesce = 0
var contadorDireita = 0
var contadorEsquerda = 0

while (true) {
  mostrarLabirinto();
console.log("Contador de passos: ", 
'\nSobe:', contadorSobe,
'\nDesce:', contadorDesce,
'\nDireita:', contadorDireita, 
'\nEsquerda:', contadorEsquerda,
)           
  var escolha = prompt("wasd");
  if (escolha == "w") {
    sobe();
  } else if (escolha == "a") {
    esquerda();
  } else if (escolha == "s") {
    desce();
  } else if (escolha == "d") {
    direita();
  }
}
