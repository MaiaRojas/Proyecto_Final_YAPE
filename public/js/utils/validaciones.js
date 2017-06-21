'use strict';

const Verificar = (valor) => {
  if ($(valor).prop('checked')) {
    return  $('#btnNext').removeClass("disabled");
  }else{
    return  $('#btnNext').addClass("disabled");
  };
};
