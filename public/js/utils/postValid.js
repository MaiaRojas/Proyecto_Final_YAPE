'use strict';
const PostregisterNumber =(phone , terms)=>{
var phone = phone.val();
var terms = terms.prop('checked');
  $.post("api/registerNumber", {"phone" :phone,"terms" :terms}, function(result){
              const data = result.data.code;
              console.log(data);
  });
};
