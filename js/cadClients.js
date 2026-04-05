console.log("Arquivo carregado com sucesso!");

const formCliente = document.querySelector(".formularioCliente");

function cadastrarCliente(event) {
  //EVITA O RELOUD DA PÁGINA
  event.preventDefault();

  //VARIÁVEIS DE CADASTRO DO CLIENTE
  let nome = document.getElementById("nome").value;
  let tipo = document.getElementById("opc").value;
  let email = document.getElementById("email").value;
  let referencia = document.getElementById("ref").value;
  let endereco = document.getElementById("end").value;
  let contato = document.getElementById("cntt").value;

  //TESTE PARA EVITAR QUE CAMPOS ESSENCIAIS FIQUEM VAZIOS
  if (!nome || !email || !referencia || !contato) {
    return alert("Um campo obrigatório está vazio.");
  }

  //CRIA O OBJETO CLIENTE
  const novoCLiente = {
    id: Date.now(),
    nome,
    tipo,
    email,
    referencia,
    endereco,
    contato,
  };

  //CRIA UMA LISTA COM AS INFORMAÇÕES
  const clientesList = JSON.parse(localStorage.getItem("clientes")) || [];

  clientesList.push(novoCLiente);
  localStorage.setItem("clientes", JSON.stringify(clientesList));

  //MOSTRA UMA MENSAGEM APÓS O CADASTRO BEM SUCEDIDO
  const mensagem = document.getElementById("msg");
  const p = document.createElement("p");
  p.textContent = "Cliente cadastrado com sucesso! ✅";
  mensagem.appendChild(p);

  //VOLTA A HOMEPAGE
  setTimeout(() => {
    window.location.href = "homePage.html";
  }, 2000);
}
if (formCliente) {
  formCliente.addEventListener("submit", cadastrarCliente);
}
