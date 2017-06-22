const insideSign = (update) => {

  const divCont_Pag_8 = $('<div class="container text-center"></div>');
  const row1      =$('<div class="row  bg_morado_ligth height_38 "></div>');
  const logo      =$('<div class="col s12 center-align margin_top_30"><img src="../../img/icons/happy-face.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="col s12 cont_center"><h5 class="center-align bolt color_white">Hola</h5>'+
                    '<img src="../../img/icons/eye.png" class="icono_small" alt="phone"><p class="color_turquesa inline">Mostrar saldo</p></div>');
  const row2      =$('<div class="row  bg_morado_dark height_62"></div>');
  const movent    =$('<div class="col s12 display_flex"><h6 class="bolt color_white">ÚLTIMOS MOVIMIENTOS</h6>'+
                    '<img src="../../img/icons/next.png" class="icono_small" alt="phone"></div>');
  const divcoment   =$('<div class="col s12"><div class="col s5"><img src="../../img/icons/icon.png" class="responsive-img" alt="icono"></div>'+
                      '<div class="col s7"><p class="color_white">¿Aún no realizas tu primer pago?<br>Es rápido y sencillo</h6></div></div>');
  const divpagos    =('<div class="col s12 display_flex1"><div class="col s5"><img src="../../img/icons/send.png" class="icono_pago" alt="icono"><p class="color_white">ENVIAR PAGO</p></div>'+
                      '<div class="col s5"><img src="../../img/icons/code-qr.png" class="icono_pago" alt="icono"><p class="color_white">RECIBIR PAGO</p></div></div>');

  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_8.append(row1);
  row2.append(movent);
  row2.append(divcoment);
  row2.append(divpagos);
  divCont_Pag_8.append(row2);

  return divCont_Pag_8;
}
