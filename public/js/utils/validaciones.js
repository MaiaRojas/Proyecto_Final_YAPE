'use strict';

const Verificar = (valor) => {
  if ($(valor).prop('checked')) {
    return  $('#btnNext').removeClass("disabled");
  }else{
    return  $('#btnNext').addClass("disabled");
  };
};

const Validar =(name,email,password ) =>{
  var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

  if (name.val() != "" && email.val() !=""&& password.val()!=""){
      if (password.val().length>6 && regex.test(email.val().trim())){
        return $('#btn_create_count').removeClass("disabled");
      }else{
        console.log('Mínimo 6 caracteres para la contraseña /El correo esta mal escrito');
        return $('#btn_create_count').addClass("disabled");
      }
  } else {
    return $('#btn_create_count').addClass("disabled");
  };
};


const soloNumber=(numbercard , month ,years)=>{
  if (numbercard.val() != "" && month.val() !=""&& years.val()!=""){
      if (numbercard.val().length == 16 && month.val()> 0 && month.val()< 13 && years.val()>16 && years.val()<25 ){
        return $('#btn_cont').removeClass("disabled");
      }else{
        return $('#btn_cont').addClass("disabled");
      }
  } else {
    console.log('llene todo los datos');
    return $('#btn_cont').addClass("disabled");
  };
};
const validClave=(number)=>{
  if (number.val() != ""){
      if (number.val().length == 4){
        return $('#btn_clave').removeClass("disabled");
      }else{
        return $('#btn_clave').addClass("disabled");
      }
  } else {
    console.log('Llene 4 cifras');
    return $('#btn_clave').addClass("disabled");
  };
};
