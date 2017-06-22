const registerCard = (update) => {

  const divCont_Pag_6 = $('<div class="container text-center"></div>');
  const row1      =$('<div class="row"></div>');
  const logo      =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/bcp-logo.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align bolt">Registra tu tarjeta débito BCP</h5>'+
                    '<p class="center-align gris_soft">Por ahora solo aceptamos cuentas de ahorro y/corriente en soles.</p></div>');
  const contVali  =$('<div class="row pad_lef_rig_10 cont_center"></div>');
  const number    =$('<input type="text" name="phone"   maxlength="16" class="col s10 padding_none input_heiht_2" placeholder=" - - - - -">');
  const divIcono  =$('<div class="col s2 text-center cont_center"></div>');
  const icono     =$('<img src="../../img/icons/card.png" class="icono_medium" alt="card">');
  const hr        =$('<hr class="col s12 mg_bot_5">');
  const timeoff     =$('<img src="../../img/icons/scan.png" class="icono_small" alt="card"><p class="cont_center inline color_turquesa">Escaner tarjeta</p>');
  const btn_cont  =$('<button id="btn_cont" class="btn btn_center disabled btn_center1">CONTINUAR</button>');
  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_6.append(row1);
  divIcono.append(icono);
  contVali.append(divIcono);
  contVali.append(number);
  contVali.append(hr);
  contVali.append(timeoff);
  divCont_Pag_6.append(contVali);
  divCont_Pag_6.append(btn_cont);

  return divCont_Pag_6;
}
