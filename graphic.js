let botaoEl = document.querySelector('#grafico-button');

function mostramensagem() {
  window.alert('Criando Gráfico');
  graphic();
}
botaoEl.addEventListener('click', mostramensagem);

function graphic() {

let vals0 = document.querySelector('#s0').value;
let valv = document.querySelector('#v').value;
let valt = document.querySelector('#t').value;

  let ctx = document.getElementsByClassName('linha');

  let chartgraph = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [valv],
      datasets: [{
        label: "Gráfico em X",
        data: ["vals0"],
        borderWidht: 16,
        borderColor: 'rgba(77, 166, 252, 0.24)',
        backgroundColor: 'trasnparent'
        },
      ]
    },
    options: {
      title: {
        display: true,
        fontSize: 20,
        text: "Gráfico de MRUV"
      },
    labels: {
      fontSyle: "bold"
    }
  }
  });
}
