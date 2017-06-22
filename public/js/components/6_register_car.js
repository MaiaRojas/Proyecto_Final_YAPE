const registerCard = (update) => {

  const divCont_Pag_6 = $('<div class="container text-center"></div>');
  const row1      =$('<div class="row"></div>');
  const logo      =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/bcp-logo.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align bolt">Registra tu tarjeta débito BCP</h5>'+
                    '<p class="center-align gris_soft">Por ahora solo aceptamos cuentas de ahorro y/corriente en soles.</p></div>');
  const contVali  =$('<div class="row pad_lef_rig_10 cont_center"></div>');
  const numbercard    =$('<input type="text" name="creditcard"   maxlength="16" class="col s10 padding_none input_heiht_2 cont_center" placeholder=" - - - - -">');
  const divIcono  =$('<div class="col s2 text-center cont_center"></div>');
  const icono     =$('<img src="../../img/icons/card.png" class="icono_medium" alt="card">');
  const hr        =$('<hr class="col s12 mg_bot_5 gris_dark">');
  const coment     =$('<img src="../../img/icons/scan.png" class="icono_small" alt="card"><p class="cont_center inline color_turquesa">Escaner tarjeta</p>');
  const row2      =$('<div class="row"></div>');
  const divdate    =$('<div class="col s12"></div>');
  const datacoment =$('<p class="col s7 gris_soft">Fecha de vencimiento</p>');
  const month      =$('<input type="text" name="month"   maxlength="2" class="col s2 input_none cont_center" placeholder="Mes">');
  const space      =$('<span class="col s1">/</span>');
  const years      =$('<input type="text" name="years"   maxlength="2" class="col s2 input_none cont_center" placeholder="Mes">');
  const btn_cont  =$('<button id="btn_cont" class="btn btn_center disabled btn_center1">CONTINUAR</button>');
  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_6.append(row1);
  divIcono.append(icono);
  contVali.append(divIcono);
  contVali.append(numbercard);
  contVali.append(hr);
  contVali.append(coment);
  divdate.append(datacoment);
  divdate.append(month);
  divdate.append(space);
  divdate.append(years);
  row2.append(divdate)
  divCont_Pag_6.append(contVali);
  divCont_Pag_6.append(row2);
  divCont_Pag_6.append(btn_cont);

  numbercard.keypress((event )=> {
    if(event.which < 47 || event.which >58) { event.preventDefault(); };
  });
  month.keypress((event )=> {
    if(event.which < 47 || event.which >58) { event.preventDefault(); };
  });
  years.keypress((event )=> {
    if(event.which < 47 || event.which >58) { event.preventDefault(); };
  });
  numbercard.on('keyup',(e)=> { soloNumber(numbercard , month ,years);});
  month.on('keyup',(e)=> { soloNumber(numbercard , month ,years);});
  years.on('keyup',(e)=> {soloNumber(numbercard , month ,years); });

  btn_cont.on('click',(e)=>{
    e.preventDefault();
    PostregisterCard(update,state.phone,numbercard,month,years,state.user.data.password);
  });
  return divCont_Pag_6;
}
