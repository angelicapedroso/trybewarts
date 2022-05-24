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

function limitetextArea(valor) { 
  const quant = 500; 
  const total = valor.length; 
  if (total <= quant) { 
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto; 
  } else {
    document.getElementById('textarea').value = valor.substr(0, quant)
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
