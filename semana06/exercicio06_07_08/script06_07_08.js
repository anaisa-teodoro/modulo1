//A terminar
fetch("https://viacep.com.br/ws/01001000/json/", {method: 'GET'})
.then((responseFetch)=>{
    return responseFetch.json();
})
