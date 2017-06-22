'use strict';
const PostregisterNumber =(update,phone , terms)=>{
  var phone = phone.val();
  var terms = terms.prop('checked');
  $.post("api/registerNumber", {"phone" :phone,"terms" :terms}, function(result){
         state.code = result;
          if (state.code.success == false) {
              alert(result.message);
          }else{
            state.selecteScreen = 3;
            console.log(state.code.data.code);
            update();
        }
  });
};
const PostcreateUser =(update, phone,name,email,password)=>{
  var phone = phone.val();
  var name = name.val();
  var email = email.val();
  var password = password.val();

  $.post("api/createUser", { "phone":phone,"name":name,"email":email,"password":password }, function(result){
         state.user = result;
         if (state.user.success == false) {
              alert(result.message);
          }else{
            // state.selecteScreen = 5;
            console.log(state.code.data.card);
            // update();
        }
  });
};
