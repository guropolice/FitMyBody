$(document).ready(function() {
    $("#error").hide();
});
 
function signUp() {
    let name = $("#fiyfi_name").val();
    let phoneNum = $("fiyfi_phoneNum").val();
    let id = $("#fiyfi_id").val();
    let pw = $("#fiyfi_pw").val();
    let confirm = $("#fiyfi_confirm").val();
 
    if(pw != confirm) {
        alert("Password does not match the confirm password.");
        return;
    }
    
    async function writeUserData(userId,name,phoneNum){
        await firebase.database().ref('users/' + userId).set({
            userId: userId,
            name: name,
            phoneNum: phoneNum
        });
    }

    firebase.auth().createUserWithEmailAndPassword(id, pw)
            .then(function() {
                alert("Signed Up!");
                writeUserData(id,name,phoneNum);
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