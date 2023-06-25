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
});
