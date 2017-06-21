const userYape = (update) => {

  const divCont_Pag_4 = $('<div class="container text-center"></div>');
  const row1       =$('<div class="row"></div>');
  const logo       =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/lockone.png" class="logo" alt="phone"></div>');
  const cont_text  =$('<div class="col s12"><h5 class="center-align bolt">Crea tu usuario Yape</h5>'+
                    '<p class="center-align">Ingresa un nombre, email y clave de usuario.</p></div>');
  const contVali   =$('<div class="row"></div>');
  const form       =$('<form class="col s12"><div class="row"></div></form>');
  const inputname  =$('<div class="input-field col s12"><div class="col s3"><img src="../../img/icons/user.png" class="icono" alt="user"></div>'+
                      '<input id="icon_prefix" type="text" class="validate col s9 margin_none" placeholder="nombre">'+
                      '<hr class="col s12 mg_bot_5"></div>');
  const inputemail =$('<div class="input-field col s12"><div class="col s3"><img src="../../img/icons/message-gray.png" class="icono" alt="message"></div>'+
                      '<input id="email" type="email" class="validate col s9 margin_none" placeholder="correo@ejemplo.com">'+
                      '<hr class="col s12 mg_bot_5"></div>');
  const inputclave =$('<div class="input-field col s12"><div class="col s3"><img src="../../img/icons/lock.png" class="icono" alt="lock"></div>'+
                      '<input id="icon_prefix" type="password" class="validate col s9 margin_none" placeholder="Ingresa clave de 6 dígitos">'+
                      '<hr class="col s12 mg_bot_5"></div>');
  const coment     =$('<p class="col s12">Cuida esta clave como oro, es tu acceso a Yape</p>');
  const btn_create_count  =$('<button class="btn btn_center disabled btn_center1">CREAR CUENTA</button>');


  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_4.append(row1);
  form.append(inputname);
  form.append(inputemail);
  form.append(inputclave);
  form.append(coment);
  form.append(btn_create_count);
  contVali.append(form);
  divCont_Pag_4.append(contVali)

  return divCont_Pag_4;
}
