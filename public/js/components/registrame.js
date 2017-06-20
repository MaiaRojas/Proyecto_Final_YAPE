'use strict';

const registry = _ => {

  const divCont_Pag_1 = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');
  const img_1   = $('<div class="carousel-item center"><img src="../../img/icons/icon-people.png" alt="100px"><h4>Paga a tus amigos</h4><p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p></div>');
  const img_2   = $('<div class="carousel-item center"><img src="../../img/icons/happy-person.png" alt="100px"><h4>Sin número de cuenta</h4><p>Elige a quién pagar desde tu lista de contactos.</p></div>');
  const img_3   = $('<div class="carousel-item center"><img src="../../img/icons/group-people.png" alt="100px"><h4>Gratis y seguro</h4><p>La trasferencia es inmediata y gratuita de una cuenta a otra.</p></div>');

  // const btn_sign  =$('<button>REGISTRAME</button>');
  // divCont_Pag_1.append(divfixed);
  divCont_Pag_1.append(img_1);
  divCont_Pag_1.append(img_2);
  divCont_Pag_1.append(img_3);
  // divCont_Pag_1.append(btn_sign);

  return divCont_Pag_1;
}
