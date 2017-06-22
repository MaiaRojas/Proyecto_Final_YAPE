const userYape = (update) => {

  const divCont_Pag_4 = $('<div class="container text-center"></div>');
  const row1       =$('<div class="row"></div>');
  const logo       =$('<div class="col s12 center-align margin_top_75"><img src="../../img/icons/lockone.png" class="logo" alt="phone"></div>');
  const cont_text  =$('<div class="col s12"><h5 class="center-align bolt">Crea tu usuario Yape</h5>'+
                    '<p class="center-align">Ingresa un nombre, email y clave de usuario.</p></div>');
  const contVali   =$('<div class="row"></div>');
  const form       =$('<form class="col s12"><div class="row"></div></form>');
  const inputname  =$('<div class="input-field col s12"><div class="col s3"><img src="../../img/icons/user.png" class="icono" alt="user"></div></div>');
  const name       =$('<input id="firstname" type="text" class="validate col s9 margin_none" placeholder="nombre">');
  const hr_1       =$('<hr class="col s12 mg_bot_5">');
  const inputemail =$('<div class="input-field col s12"><div class="col s3"><img src="../../img/icons/message-gray.png" class="icono" alt="message"></div></div>');
  const email      =$('<input id="email" type="email" class="validate col s9 margin_none" placeholder="correo@ejemplo.com">');
  const hr_2       =$('<hr class="col s12 mg_bot_5">');
  const inputclave =$('<div class="input-field col s12"><div class="col s3"><img src="../../img/icons/lock.png" class="icono" alt="lock"></div></div>');
  const clave      =$('<input id="clave" type="password"  maxlength="10" class="validate col s9 margin_none" placeholder="Ingresa clave de 6 dígitos">');
  const hr_3       =$('<hr class="col s12 mg_bot_5">');
  const coment     =$('<p class="col s12">Cuida esta clave como oro, es tu acceso a Yape</p>');

  const btn_create_count  =$('<button id="btn_create_count" class="btn btn_center disabled btn_center1">CREAR CUENTA</button>');

  row1.append(logo);
  row1.append(cont_text);
  divCont_Pag_4.append(row1);
  inputname.append(name);
  inputname.append(hr_1);
  form.append(inputname);
  inputemail.append(email);
  inputemail.append(hr_2);
  form.append(inputemail);
  inputclave.append(clave);
  inputclave.append(hr_3);
  form.append(inputclave);
  form.append(coment);
  form.append(btn_create_count);
  contVali.append(form);
  divCont_Pag_4.append(contVali);

  name.on('keyup',(e)=>{ Validar(name,email,clave)});
  email.on('keyup',(e)=>{ Validar(name,email,clave)});
  clave.on('keyup',(e)=>{ Validar(name,email,clave)});


  btn_create_count.on('click',(e)=>{
    e.preventDefault();
    PostcreateUser(update,state.phone,name,email,clave);
  });

  return divCont_Pag_4;
}
