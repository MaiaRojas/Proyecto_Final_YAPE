'use strict';

const yapeOk = (update) => {

  const divCont_Pag_5 = $('<div class="text-center bg_amarillo"></div>');
  const row1      =$('<div class="row padding_top_60"></div>');
  const logo      =$('<div class="col s12 center-align"><img src="../../img/icons/check.png" class="logo" alt="check"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align bolt">¡Bien!<br>Ahora puede usar Yape</h5></div>');

  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_5.append(row1)

  return divCont_Pag_5;
}
