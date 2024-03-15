/* --------------- Hàm kiểm tra rỗng --------------- */
function kiemTraRong(value, idErr, message) {
    if (value.trim() === "") {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
    else {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
}

/* --------------- Hàm kiểm tra độ dài --------------- */
function kiemTraDoDai(value, min, max, idErr, message) {
    if (value.length >= min && value.length <= max) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}

/* --------------- Kiểm tra trong khoảng số --------------- */
function kiemTraSo(value, min, max, idErr, message) {
    if (value >= min && value <= max) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}

/* --------------- Kiểm tra số rỗng --------------- */
function kiemTraSoRong(value, idErr, message) {
    if (value == 0) {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
    else {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
}

/* --------------- Kiểm tra tài khoản --------------- */
/* Kiểm tra số */
function kiemTraKySo(value, idErr, message) {
    var re = /^\d+$/g
    var isKySo = re.test(value);
    if (isKySo) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}
/* Kiểm tra trùng id */
/*function kiemTraTrungID(value, arr, idErr, message) {
    var viTriID = arr.findIndex(function(item){
        return item.taiKhoan == value; 
    });
    if (viTriID == -1){
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}*/

/* --------------- Kiểm tra tên --------------- */
/* Hàm kiểm tra chữ */
function kiemTraChu(value, idErr, message) {
    var re = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
    var isStr = re.test(value);
    if (isStr) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}

/* --------------- Kiểm tra email --------------- */
function kiemTraEmail(value, idErr, message) {
    var re =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    var isEmail = re.test(value);
    if (isEmail) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}

/* --------------- Kiểm tra mật khẩu --------------- */
function kiemTraMK(value, idErr, message) {
    var re = /(?=.*\d)(?=.*[A-Z])(?=.*\W)/;
    var isPass = re.test(value);
    if (isPass) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}

/* --------------- Kiểm tra ngày --------------- */
function kiemTraNgay(value, idErr, message) {
    var re = /(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/g;
    var isDate = re.test(value);
    if (isDate) {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
    else {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
}

/* --------------- Kiểm tra chức vụ --------------- */
function kiemTraChucVu(value, idErr, message) {
    if (value === "Chọn chức vụ") {
        getEle(idErr).innerHTML = message;
        getEle(idErr).classList.add("d-block");
        return false;
    }
    else {
        getEle(idErr).innerHTML = "";
        getEle(idErr).classList.remove("d-block");
        return true;
    }
}