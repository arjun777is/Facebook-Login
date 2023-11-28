$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            firstname:{
                required:true,
                minlength:4
                
            },
           surname:{
            required:true
           },
           email:{
            required:true,
            email:true
           },
           newpassword:{
            required:true,
            minlength:5
           },
           female:{
            required:true
           }


        }
    })
})