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

//POPUP DE CLIENTES
const openBt = document.querySelectorAll('.openMd');

openBt.forEach(button => {
  button.addEventListener('click', () =>{
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    const clientesLista = document.getElementById('cList')
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientesLista.innerHTML = "";

    if(clientes.length === 0) {
      clientesLista.innerHTML = "<p> Nenhum cliente cadastrado!</p>";
    } else{
      clientes.forEach((cliente) => {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${cliente.nome}</strong> :  tipo - ${cliente.tipo} <br> email - ${cliente.email} <br> referência - ${cliente.referencia} <br> endereço - ${cliente.endereco} <br> contato - ${cliente.contato}`;

      clientesLista.appendChild(p);
    });
  }
   modal.showModal();
  });
});

const closeBt = document.querySelectorAll('.closeMd');

closeBt.forEach(button => {
  button.addEventListener('click', () =>{
     const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
   modal.close();
  })
})
