function someFunc(){

var age = document.getElementById("txt").value;

alert ( age > 17 ? "Добро пожаловать" : "Вы не можете войти в этот раздел сайта");

}

document.getElementById("btn").onclick = someFunc;