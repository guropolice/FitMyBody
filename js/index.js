$(document).ready(function() {
    $("#error").hide();
});

function signIn() {
    var id = $(".js-user-id").val();
    var pw = $(".js-user-pw").val();
    firebase.auth().signInWithEmailAndPassword(id, pw)
            .then(function() {
                location.href="set_info.html";
            })
            .catch(function(e) {
                //lastWork = "signIn";
                $("#error #errmsg").html(e.message);
                $("#error").show();
                $("#signIn").hide();
                return;
            });
}
 
function back() {
    //$("#" + lastWork).show();
    $("#").show();
    $("#error").hide();
}