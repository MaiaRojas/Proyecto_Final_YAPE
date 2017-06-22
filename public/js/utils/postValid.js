'use strict';
const PostregisterNumber =(update,phone , terms)=>{
  var phone = phone.val();
  var terms = terms.prop('checked');
  $.post("api/registerNumber", {"phone" :phone,"terms" :terms}, function(result){
         state.datos = result;
          if (state.datos.success == false) {
              alert(result.message);
          }else{
            state.selecteScreen = 3;
            state.phone = state.datos.data.phone;
            state.code = state.datos.data.code;
            console.log(state.datos.data.code);
            console.log(state.datos.data.phone);
            update();
        }
  });
};
const PostcreateUser =(update, phone,name,email,password)=>{
  var phone = phone;
  console.log(phone);
  var name = name.val();
  console.log(name);
  var email = email.val();
  console.log(email);
  var password = password.val();
  console.log(password);

  $.post("api/createUser", { "phone":phone,"name":name,"email":email,"password":password }, function(result){
        console.log('entro al post');
         state.user = result;
         console.log(state.user);
         if (state.user.success == false) {
              alert(result.message);
          }else{
            state.selecteScreen = 5;
            console.log(state.datos.data.card);
            update();
        }
  });
};
