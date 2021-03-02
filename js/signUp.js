$(document).ready(function() {
    $("#error").hide();
});
 
function signUp() {
    let id = $("#fiyfi_id").val();
    let pw = $("#fiyfi_pw").val();
    let confirm = $("#fiyfi_confirm").val();
 
    if(pw != confirm) {
        alert("Password does not match the confirm password.");
        return;
    }
 
    firebase.auth().createUserWithEmailAndPassword(id, pw)
            .then(function() {
                alert("Signed Up!");
                location.href="set_info.html";
            })
            .catch(function(e) {
                lastWork = "signUp";
                $("#error #errmsg").html(e.message);
                $("#error").show();
                $("#signUp").hide();
                return;
            });
}

function back() {
    $("#" + lastWork).show();
    //$("#").show();
    $("#error").hide();
}