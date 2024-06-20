function preenchimentoCampos(registroId, nomeId, marcaId, modeloId, serieId) {
  let registro = document.getElementById(registroId).value;
  let nome = document.getElementById(nomeId).value;
  let marca = document.getElementById(marcaId).value;
  let modelo = document.getElementById(modeloId).value;
  let serie = document.getElementById(serieId).value;
  cadastrar(registro, nome, marca, modelo, serie);
}

function cadastrar(registro, nome, marca, modelo, serie) {
  let petCadastro = { register: registro, name: nome, brand: marca, model: modelo, set: serie };
  let cadastros = localStorage.getItem("dadosCadastros"); 
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(petCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros)) 
  alert("Cadastro " + nome + " foi feito com sucesso!");
  location.reload();
}

function listarCadastros() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h1>Consulta de Cadastros:</h1>")
  if (cadastros == null)
    document.write("<h3>Ainda não há cadastros realizados para consultar.</h3>");
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach(cadastro => {
      document.write("<ul>");
      document.write("<li>Registro: " + cadastro.register + "</li>");
      document.write("<li>Nome: " + cadastro.name + "</li>");
      document.write("<li>Marca: " + cadastro.brand + "</li>");
      document.write("<li>Modelo: " + cadastro.model + "</li>");
      document.write("<li>Série: " + cadastro.set + "</li>");
      document.write("</ul><p></p>");
    });
  }
}

function limparStorage() {
  localStorage.clear();
  window.location.reload();
}
