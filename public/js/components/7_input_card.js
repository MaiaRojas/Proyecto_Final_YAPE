const inputClave = (update) => {

    const divCont_Pag_7 = $('<div class="container text-center"></div>');
    const row1      =$('<div class="row"></div>');
    const logo      =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/bcp-logo.png" class="logo" alt="phone"></div>');
    const cont_text =$('<div class="cont_text col s12 cont_center"><h5 class="center-align bolt">Ingresa la calve de tu tarjeta</h5>'+
                      '<p class="center-align gris_soft inline">Tarjeta</p>'+'<span class="bold">****'+ state.dateUserCard.data.cardNumber.slice(-4)  +'</span> '+'</div>');
    const contVali  =$('<div class="row pad_lef_rig_10 cont_center"></div>');
    const number    =$('<input type="password" name="clave_card"   maxlength="4" class="col s10 padding_none input_heiht_2 cont_center" placeholder=" - - - - -">');
    const divIcono  =$('<div class="col s2 text-center cont_center"></div>');
    const icono     =$('<img src="../../img/icons/lock.png" class="icono_medium" alt="card">');
    const hr        =$('<hr class="col s12 mg_bot_5 gris_dark">');
    const btn_clave  =$('<button id="btn_clave" class="btn btn_center disabled btn_center1">REGISTRAR</button>');
    row1.append(logo);
    row1.append(cont_text);
    divCont_Pag_7.append(row1);
    divIcono.append(icono);
    contVali.append(divIcono);
    contVali.append(number);
    contVali.append(hr);
    divCont_Pag_7.append(contVali);
    divCont_Pag_7.append(btn_clave);

    number.keypress((event )=> {
      if(event.which < 47 || event.which >58) { event.preventDefault(); };
    });
    number.on('keyup',(e)=> { validClave(number);});

    btn_clave.on('click',(e)=>{
      e.preventDefault();
      state.selecteScreen = 8;
      update();
    });
    return divCont_Pag_7;
  }
