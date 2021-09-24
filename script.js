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
