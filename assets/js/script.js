/*
tag: getElementByTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let sugestao =  window.document.querySelector("#sugestao")
let nomeok = false
let emailok = false
let sugestaook = false

nome.style.width ='100%'
email.style.width='100%'

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inváldo'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = 'green'
        nomeok = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == 1 || email.value.indexOf ('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailok = true
    }
}

function validaSugestao(){
    let txtSugestao = document.querySelector('#txtSugestao')

    if(sugestao.value.length >= 100){
        txtSugestao.innerHTML = 'Permitido no máximo 100 caracteres'
        txtSugestao.style.color = 'red'
        txtSugestao.style.display = 'block'
    }else{
        txtSugestao.style.display='none'
        sugestaook = true
    }
}

function enviar(){
    if(nomeok == true && emailok == true && sugestaook == true){
        alert ('Enviado com sucesso!!')
    }else{
        alert('Por favor preencha novamente')
    }
}