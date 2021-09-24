// requisito feito com ajuda do Victor Faria (monitor)
const entrarButton = document.getElementById('theLogin');
const usuario = 'tryber@teste.com';
const senha = '123456';
const nomeInput = document.getElementById('nomeAqui');
const senhaInput = document.getElementById('senhaAqui');

function checkData() {
  if (nomeInput.value === usuario && senhaInput.value === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
entrarButton.addEventListener('click', checkData);

// Requisito feito referenciado por StackOverflow "https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea"
function limitetextArea(valor) { // a função com o mesmo nome em "onkeyup" no html, serve para chamar a função
  const quant = 500; // quantidade de caracteres permitidos
  const total = valor.length; // valor do parametro com length para percorrer a quantidade
  if (total <= quant) { // condição de if para quantidade total (500) menos o valor percorrido
    const resto = quant - total; // resultado: o resto será a quantidade (500) menor que o total percorrido
    document.getElementById('counter').innerHTML = resto; // atribui o resto para o "count" (id do contador)
  } else {
    document.getElementById('textarea').value = valor.substr(0, quant);// A função SUBSTR( ) retorna
  // caracteres do valor cadeia a partir da posição de caractere especificada por início. O número
  // de caracteres retornados é especificado pelo comprimento. O SUBSTR extrai caracteres a partir do índice inical
  // extrai caracteres até o final da string por causa do length.
  }
}
limitetextArea('');

const submit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function changeButton() {
  if (checkbox.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}
checkbox.addEventListener('click', changeButton);
