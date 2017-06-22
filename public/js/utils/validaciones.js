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
