/* Hàm getEtlement */
function getEle(properties) {
    return document.querySelector(properties);
}

/* Hàm lưu mảng vào local storage */
function saveLocalStorage(dsnv){
    // Chuyển về dạng Json
    var DsnvJson = JSON.stringify(dsnv);
    // lưu vào Local Storage
    localStorage.setItem("DSNV_Local", DsnvJson);
}