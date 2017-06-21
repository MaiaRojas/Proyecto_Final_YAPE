const inputCod = (update) => {

  const divCont_Pag_3 = $('<div class="container text-center"></div>');
  const row1      =$('<div class="row"></div>');
  const logo      =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/message.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align bolt">Ahora ingresa tu código</h5>'+
                    '<p class="center-align">Enviamos un SMS con el código de validación al numero'+' *numerito*'+'</p></div>');
  const contVali  =$('<div class="row pad_lef_rig_10"></div>');
  const number    =$('<input type="number" name="phone" class="col s9 padding_none clave" placeholder=" - - - - -">');
  const divIcono  =$('<div class="col s3 text-center cont_center"></div>');
  const icono     =$('<img src="../../img/icons/lock.png" class="icono" alt="lock">');
  const hr        =$('<hr class="col s12 mg_bot_5">');
  const timeoff     =$('<p class="cont_center gris_soft ">Reintentar en <span class="lock"></span>21</p>');

  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_3.append(row1);
  divIcono.append(icono);
  contVali.append(divIcono);
  contVali.append(number);
  contVali.append(hr);
  contVali.append(timeoff);
  divCont_Pag_3.append(contVali)

  return divCont_Pag_3;
}
