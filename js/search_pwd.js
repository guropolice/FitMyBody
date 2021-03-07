$("#btn-resetPassword").click(function()
{
    var auth = firebase.auth();
    var email = $("#fiyfi_id").val();
    

    if(email != "")
    {
        auth.sendPasswordResetEmail(String(email)).then(function()
        {
                window.alert("이메일을 확인해주세요!!");
        })
        .catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("잘못된 이메일입니다. 다시 확인해주세요!");
        });
    }

    else
    {
        window.alert("Please write your email first.");
    }
});