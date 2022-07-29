$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();


    var user_err=true;
    var pass_err=true;
    var conf_pass_err=true;
    var em_err=true;
    
    $('#email').keyup(function(){
        email_validation();
    });
    function email_validation(){
        var emailregex =  /^([\-\.a-zA-Z0-9]+)@([\-\.a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
        var email_val = $('#email').val();
        if (emailregex.test(email_val)){
            $('#emailvalidation').hide();
        }
        else{
            
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email must be of format "xyz@lmn.ab" ');
            $('#emailvalidation').css('color','red');
            user_err=false;
            return false;


        }
        
    }


    $('#username').keyup(function(){
        username_validation();
    });
    function username_validation(){
        var username_val = $('#username').val();
        if (username_val.length==""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username can not be empty...');
            $('#usernamevalidation').css('color','red');
            user_err=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
        if (username_val.length<3 || username_validation.length>10){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username length range 3-10');
            $('#usernamevalidation').css('color','red');
            user_err=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }
    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var passregex =  /^[a-zA-Z0-9!@#$%^&*0-9]{6,16}$/;

        var pass_val=$('#password').val();
        if (passregex.test(pass_val)){
            $('#passwordvalidation').hide();
        }
        else{
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password must be of form "a-zA-Z0-9!@#$%^&*0-9"');
            $('#passwordvalidation').css('color','red');
            user_err=false;
            return false;
        }
    }

    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    function confirm_password(){
        var conf_val = $('#confirmpassword').val();
        var pass_val = $('#password').val();
        if (pass_val!=conf_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match...');
            $('#confirmpasswordvalidation').css('color','red');
            conf_pass_err=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();

        }
    }

    $('#submitbutton').click(function(){
        username_validation();
        password_validation();
        confirm_password();
        email_validation();

        if(user_err==true && pass_err==true && conf_pass_err==true && em_err==true){
            return true;
        }
        else{
            return false;
        }
    });
    
});
