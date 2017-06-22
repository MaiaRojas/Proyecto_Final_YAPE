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
const PostresendCode =(update,phone)=>{
  var phone = phone;
  console.log(phone);
  console.log(state.datos);
  $.post("api/resendCode", {"phone" :phone }, function(result){
         console.log(result);
        //   if (state.datos.success == false) {
        //       alert(result.message);
        //   }else{
        //     state.selecteScreen = 3;
        //     state.phone = state.datos.data.phone;
        //     state.code = state.datos.data.code;
        //     console.log(state.datos.data.code);
        //     console.log(state.datos.data.phone);
        //     update();
        // }
  });
};
const PostcreateUser =(update, phone,name,email,password)=>{
  var phone = phone;
  var name = name.val();
  var email = email.val();
  var password = password.val();

  $.post("api/createUser", { "phone":phone,"name":name,"email":email,"password":password }, function(result){
         state.user = result;
         if (state.user.success == false) {
              alert(result.message);
          }else{
            state.selecteScreen = 5;
            update();
        }
  });
};
const PostregisterCard =(update,phone,cardNumber,cardMonth,cardYear,cardPassword)=>{
  var phone = phone;
  var cardNumber = cardNumber.val();
  var cardMonth = cardMonth.val();
  var cardYear = cardYear.val();
  var cardPassword = cardPassword;

  $.post("api/registerCard", { "phone":phone,"cardNumber":cardNumber,"cardPassword":cardPassword,"cardMonth":cardPassword ,"cardYear":cardYear}, function(result){
         state.dateUserCard = result;
         if (state.dateUserCard.success == false) {
              alert(result.message);
         }else{
            state.selecteScreen = 7;
            update();
        }
  });
};
