document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#calendario-inline", {
    inline: true,
    dateFormat: "d-m-Y",
  });
});

function contadorClientes() {
  //BUSCA A LISTA DE CLIENTES
  let dados = localStorage.getItem("clientes");

  let total = 0;
  if (dados) {
    const arrayClientes = JSON.parse(dados);
    total = arrayClientes.length;
  }

  const contador = document.getElementById("contador");
  if (contador) {
    contador.textContent = total;
    console.log("contador atualizado!");
  } else {
    console.log("erro ao atualizar contador. verifique o código.");
  }
}
// CHAMA A FUNÇÃO ASSIM QUE A PÁGINA É CARREGADA
window.addEventListener("DOMContentLoaded", contadorClientes);
