const inputCod = (update) => {

  const divCont_Pag_3 = $('<div class="container text-center"></div>');
  const row1      =$('<div class="row"></div>');
  const logo      =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/message.png" class="logo" alt="phone"></div>');
  const cont_text =$('<div class="cont_text col s12"><h5 class="center-align bolt">Ahora ingresa tu código</h5>'+
                    '<p class="center-align">Enviamos un SMS con el código de validación al numero  <span class="bolt">'
                    +state.phone +'</span></p></div>');
  const contVali  =$('<div class="row pad_lef_rig_10"></div>');
  const number    =$('<input type="text" name="phone"   maxlength="6" class="col s9 padding_none clave input_heiht_2" placeholder=" - - - - -">');
  const divIcono  =$('<div class="col s3 text-center cont_center"></div>');
  const icono     =$('<img src="../../img/icons/lock.png" class="icono_medium" alt="lock">');
  const hr        =$('<hr class="col s12 mg_bot_5">');
  const timeoff     =$('<p class="cont_center gris_soft ">Reintentar en <span class="lock"></span><span class="indice"></span></p>');

  console.log(state.datos.data.code);
  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_3.append(row1);
  divIcono.append(icono);
  contVali.append(divIcono);
  contVali.append(number);
  contVali.append(hr);
  contVali.append(timeoff);
  divCont_Pag_3.append(contVali);

  var i= 22;
  var myVar = setInterval(function(){ InicioTime() }, 1000);

  function InicioTime() {
    i=i-1;
    $('.indice').text(i);
    if (i==0){ i=22;
      PostresendCode(update,state.datos.data.phone);
    }
    console.log(i);
  }

  number.on('keyup',(e) => {
    if(number.val()== state.datos.data.code){
      clearInterval(myVar);
       state.selecteScreen = 4;
       update();
    }
  });

  return divCont_Pag_3;
}
