'use strict';

const termsCond = (detail) => {

  const divCont_Pag_2 = $('<div class="container"></div>');
  const row1      =$('<div class="row"></div>');
  const logo      =$('<div class="col s12 center-align"><img src="../../img/icons/phone.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align">Para comenzar validemos tu número</h5><p class="center-align">Recibirás un SMS con un código de validación</p></div>');
  const contVali  =$('<div class="row"></div>');
  const number    =$('<input type="number" name="phone" class="col s9 padding_none" placeholder="Número de télefono">');
  const icono     =$('<img src="../../img/icons/phoneandnumber.png" class="icono col s3" alt="">');
  const hr        =$('<hr class="col s12">');
  const check     =$('<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />');
  const label     =$('<label for="filled-in-box">Acepto los <span>Términos y condiciones</span></label>');

  const btn_next  =$('<button>CONTINUAR</button>');
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

  return divCont_Pag_2;
}
