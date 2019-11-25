var axios = require('axios')

function criarContaTest(info) {
    axios.post('http://192.168.0.21:3000/api/users/register', info)
    .then(function(response) {
        if (response.status == 200) {
            console.log("Criar conta OK");
        } else {
            console.log("Ocorreu um erro.")
        }
    });
}

function loginTest(info) {
    axios.post('http://192.168.0.21:3000/api/users/login', info)
    .then(function(response) {
        if (response.status == 200) {
            console.log("Login OK");
        } else {
            console.log("Ocorreu um erro.")
        }
    });
}