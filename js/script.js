document.getElementById("botaoEnviar").addEventlistener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementByID("email").value != ""&& 
    document.getElementById("telefone").value !=""&&{
  alert("Obrigada por deixar seu email!")
  }else{
    alert("Por favor preencha os campos nome, email e telefone")
  }
}



