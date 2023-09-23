const senhaBox = document.querySelector('#senha')
const lenght = 14;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const todos = upperCase + lowerCase + number;

function criarSenha(){
     let senha = "";
     senha += upperCase[Math.floor(Math.random() * upperCase.length)];
     senha += lowerCase[Math.floor(Math.random() * lowerCase.length)];
     senha += number[Math.floor(Math.random() * number.length)];

     while(lenght>senha.length){
        senha += todos[Math.floor(Math.random() * todos.length)];
     }
     senhaBox.value = senha;
}

function copiarSenha() {
    if(senhaBox.value == ''){
        alert('Gere uma senha primeiro!')
    }else{
        navigator.clipboard.writeText(senha.value).then(() => {
            alert('Senha copiada!');
          })
    }
  }
