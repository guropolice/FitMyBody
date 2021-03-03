function searchPwd(){
    const resetPassword = document.getElementById('resetPassword');
    const mailField = document.getElementById('mail');


    const auth = firebase.auth();
    
    const resetPasswordFunction = () =>{
        const email = mailField.value;

        auth.sendPasswordResetEmail(email)
        .then(()=>{
            console.log('이메일이 성공적으로 보내졌습니다!');
            alert('이메일을 확인하세요!');
        })
        .catch(error => {
            console.error(error);
            alert('fail');
        })

    }

    resetPassword.addEventListener('click', resetPasswordFunction);



    /*const t = document.getElementById('target');

    t.addEventListener('submit', function (e) {
        e.preventDefault();
        let userEmail = t['email-seek'].value;
*/

       /* var auth = firebase.auth();
        var emailAddress = $("fiyfi_id").val();

        firebase.auth().sendPasswordResetEmail(emailAddress).then(function(){
            alert('이메일을 확인하세요!');
        }).catch(function(error){
            alert('실패하셨어요!');
        })*/






        /*if(emailAddress !='') {
            firebase.auth().sendPasswordResetEmail(emailAddress).then(function(){
                console.log('비밀번호 reset || Email 전송');
            }).catch(function(error) {
                var errorMessage = error.message;
                console.log('에러 메시지:'+errorMessage);
            });
        } else{
            console.log('이메일이 맞지 않습니다.');
            
        }*/
    };
