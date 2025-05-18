const form = document.getElementById('form');
const lista = document.getElementById('lista');
const totalEl = document.getElementById('total');
let lancamentos = JSON.parse(localStorage.getItem('lanc')) || [];

function render() {
  lista.innerHTML = '';
  let soma = 0;
  lancamentos.forEach(l => {
    soma += parseFloat(l.valor);
    lista.innerHTML += `<li>${l.data} | ${l.categoria} | R$ ${l.valor}</li>`;
  });
  totalEl.textContent = soma.toFixed(2);
  localStorage.setItem('lanc', JSON.stringify(lancamentos));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  lancamentos.push({
    data: form.data.value,
    categoria: form.categoria.value,
    valor: form.valor.value
  });
  render();
  form.reset();
});

render();
