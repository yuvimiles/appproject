$(document).ready(function() {

    $('#LoginForm').submit(function(event) {
        event.preventDefault();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var password = $('#password').val();
        var password2 = $('#password2').val();
        var email = $('#email').val();
        var email2 = $('#email2').val();

        // Perform validation or login logic here
        // For this example, we'll just display a success message
        $('#result').html('<div class="alert alert-success">signed up successfully!</div>');
    });


    $("#password_again").change(function() {
        if($("#password").val() == $("#password_again").val())
        {
            $("#submit_btn").prop("disabled",false);
            $("#result").show();
            $('#result').html('<div class="alert alert-success">Passwords are not the same</div>');

        }
        else{
            $("#submit_btn").prop("disabled",true);
            $("#result").hide();
            $('#result').html('<div class="alert alert-success"></div>');

        }
    });


    $("#email_again").change(function() {
        if($("#email_again").val() == $("#email").val())
        {
            $("#submit_btn").prop("disabled",false);
            $("#result").show();
            $('#result').html('<div class="alert alert-success">Emails are not the same</div>');

        }
        else{
            $("#submit_btn").prop("disabled",true);
            $("#result").hide();
            $('#result').html('<div class="alert alert-success"></div>');

        }
    });

});
