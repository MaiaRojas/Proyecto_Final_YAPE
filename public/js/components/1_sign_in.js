'use strict';

const registry = (update)=> {

  const divCont_Pag_1 = $('<div class="container text-center"></div>');
  const divSlider =$('<div class="carousel carousel-slider center" data-indicators="true"></div>')
  const img_1   = $('<div class="carousel-item center"><img src="../../img/icons/icon-people.png" alt="icono_people">'+
                    '<h5 class="bolt">Paga a tus amigos</h5><p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p></div>');
  const img_2   = $('<div class="carousel-item center"><img src="../../img/icons/happy-person.png" alt="icono_person">'+
                    '<h5 class="bolt">Sin número de cuenta</h5><p>Elige a quién pagar desde tu lista de contactos.</p></div>');
  const img_3   = $('<div class="carousel-item center"><img src="../../img/icons/group-people.png" alt="icono_group">'+
                    '<h5 class="bolt">Gratis y seguro</h5><p>La trasferencia es inmediata y gratuita de una cuenta a otra.</p></div>');

   const btn_sign  =$('<button class="waves-effect waves-light btn-large">REGISTRAME</button>');


  divSlider.append(img_1);
  divSlider.append(img_2);
  divSlider.append(img_3);
  divCont_Pag_1.append(divSlider);
  divCont_Pag_1.append(btn_sign);

  btn_sign.on('click' , (e) => {
    e.preventDefault();
    state.selecteScreen= 2;
    update();
  })

  return divCont_Pag_1;
}
