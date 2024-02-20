function exibirMensagem() {
  alert("Bem-vindo! Espero que aproveite sua visita ao nosso site.");
}
exibirMensagem()

var nomeUsuarioElemento = document.querySelector('#nome-usuario');
var nomeUsuario = "João";

nomeUsuarioElemento.textContent = "Olá, " + nomeUsuario + "!";