function validarSenha(){

var nome = document.getElementById("nome").value;
var n1;
var senha = document.getElementById("senha").value;
var r1, r2, r3, r4,r5; 



// verifica se o nome esta preenchido 
if(nome.match(/.{1,}/)){    
    n1 = true;
 }else{
    
    n1 = false;
 }

// verifica se tem 6 caracteres ou mais
if(senha.match(/.{6,}/)){    
    r1 = true;
 }else{
    
    r1 = false;
 }

  // verifica se tem ao menos uma letra minuscula 
  if(senha.match(/[a-z]{1,}/)){
   
    r2 = true;
 }else{
 
    r2 = false;
 }

 // verifica se tem ao menos uma letra maiúscula
 if(senha.match(/[A-Z]{1,}/)){
   
    r3 = true;
 }else{
 
    r3 = false;
 }

 // verifica de tem ao menos um numero
 if(senha.match(/[0-9]{1,}/)){
    
    r4 = true;
 }else{
   
    r4 = false;
 }

 // verifica de tem ao menos um caractere especial

 if(senha.match(/[!@#$%^&*()-+]{1,}/)) {
    
    r5 = true;
 }else{
   
    r5 = false;
 }


 // o formulario só senha enviado caso todos os requisitos forem atingidos;
 
 if(n1 == false){
    alert( "Por Favor, preencha o campo nome!");
    return false;
}
 if(r1 && r2 && r3 && r4 && r5  == true){
        alert( "Usuario Cadastrado com Sucesso!");
        return true;
    }else {
        if( r1 == false){
        alert("Senha com menos de 6 caracteres");    
            return false;
        }
        else {
            if( r2 == false){
                alert("Senha sem pelo menos uma letra minuscula");    
                    return false;
                }
                else {
                    if( r3 == false){
                        alert("Senha sem pelo menos uma letra maiúscula");    
                            return false;
                        }
                        else {
                            if( r4 == false){
                                alert("Senha sem pelo menos um numero");    
                                    return false;
                                }
                                else {
                                    if( r5 == false){
                                        alert("Senha sem pelo menos um caracter especial");    
                                            return false;
                                        }
                                }
                        }
                        
                }

        }
       
       
       
    }

}