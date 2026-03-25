const formCliente = document.querySelector(".formularioCliente");

formCliente.addEventListener("submit", function (cad) {
  cad.preventDefault();

  const nome = document.getElementById("nomeC").value;
  const tipo = document.getElementById("opc").value;

  if (!nome) {
    return alert("O nome não pode estar vazio");
  }

  const dadoCliente = {
    name: nome,
    tipo: tipo,
    dataCadastro: new Date().toISOString(),
  };
  console.log("Dados prontos para envio:", dadoCliente);

  cadastarCliente(dadoCliente);
});

function cadastarCliente(dados) {
  const mensagem = document.getElementById("m");
  const p = document.createElement("p");
  p.textContent = "Cliente cadastrado com sucesso! ✅";
  mensagem.appendChild(p);

  setTimeout(() => {
    window.location.href = "homePage.html";
  }, 2000);
}
