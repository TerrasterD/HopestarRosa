///Url base da API
var urlRoot = "https://vapor-projeto-hopstar.herokuapp.com";

/*
Cadastrar Responsavel
*/
function addManager() {

  //Obtem os valores dos campos
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // const data = '{"name":"' + name +
  //     '","email":"' + email +
  //     '","password":"' + password +
  //     '"}';

  const data ={
    name: name,
    email: email,
    password: password
  };

  const parameters = {
    headers: {
      "Content-Type": "application/json"
    },
    mode: "no-cors",
    body: JSON.stringify(data),
    method: "POST"
  };

  fetch(urlRoot + "/api/resp", parameters)
    .then(resp => resp)
    .then(json => {
      console.log(json)
      alert(json)
    })
    .catch(error => {
      console.log("deu ruim" + error)
    });


  // var ajax = new XMLHttpRequest();

  // ajax.open("POST", urlRoot + "/api/resp", true);

  // ajax.setRequestHeader("Content-Type", "application/json");

  // // Envia a requisição
  // ajax.send(data);
  // // Cria um evento para receber o retorno.
  // ajax.onreadystatechange = function () {
  //   // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
  //   if (this.readyState == 4 && this.status == 200) {
  //     var data = JSON.parse(this.response);
  //     if (data.name == name) {
  //       alert("Cadastro realizado com sucesso!");
  //       parent.location = "../html/index.htm"
  //     } else {
  //       alert("Erro no Cadastro 😞 Tente novamente!");
  //     }
  //   }
  // }
}
