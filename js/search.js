function clearInput() {
    let clean_arr = document.getElementsByClassName("search-box__window");
    for (let i = 0; i < clean_arr.length; i++) {
        clean_arr[i].value = null;
    }
}