function blockEmpty() {
    const id = document.querySelector(".js-user-id").value,
        pw = document.querySelector(".js-user-pw").value;

    if (id === '') {
        alert("아이디를 입력해주세요!");
    } else if (pw === '') {
        alert("비밀번호를 입력해주세요!");
    } else {
        location.href = "search.html";
    }
}