'use strict';

const termsCond = (update) => {

  const divCont_Pag_2 = $('<div class="container text-center"></div>');
  const row1      =$('<div class="row"></div>');
  const logo      =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/phone.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align bolt">Para comenzar validemos tu número</h5>'+
                    '<p class="center-align">Recibirás un SMS con un código de validación</p></div>');
  const contVali  =$('<div class="row pad_lef_rig_10"></div>');
  const number    =$('<input type="text" maxlength="9" name="phone" class="col s9 padding_none" placeholder="Número de télefono">');
  const icono     =$('<img src="../../img/icons/phoneandnumber.png" class="icono col s3" alt="">');
  const hr        =$('<hr class="col s12 mg_bot_5">');
  const check     =$('<input type="checkbox" class="filled-in" id="aceptar"  required>');
  const label     =$('<label for="aceptar">Acepto los <span class="color_turquesa">Términos y condiciones</span></label>');

  const btn_next  =$('<button id="btnNext"class="btn btn_center disabled">CONTINUAR</button>');
  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_2.append(row1)
  contVali.append(icono);
  contVali.append(number);
  contVali.append(hr);
  contVali.append(check);
  contVali.append(label);
  divCont_Pag_2.append(contVali)
  divCont_Pag_2.append(btn_next)

  number.keypress((event )=> {
    if(event.which < 47 || event.which >58) {
        event.preventDefault();
    };
  });

  check.on('click', (e)=>{
    Verificar('#aceptar');
  });

  number.on('keyup',(e) => {
      if(number.val() != "" ){
        if (number.val().length == 9 && $('#aceptar').prop('checked')){
                $('#btnNext').removeClass("disabled");
         } else {
               $('#btnNext').addClass("disabled");
        }
      };
  });

   btn_next.on('click',(e)=>{
     PostregisterNumber(update ,number,check);
     
   });

  return divCont_Pag_2;
}
