
function validarLogin(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    var myHeaders = new Headers();
    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

    fetch('http://127.0.0.1:8080/usuairos/validaLogin?login=' + login + '&senha=' + senha,myInit)
    .then(function(response) {
        console.log(response);
        window.location.href = 'listProdutos.html';
      })

}
