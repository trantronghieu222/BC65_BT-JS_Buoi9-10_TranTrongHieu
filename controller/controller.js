/* Lấy thông tin từ form */
function layThongTinForm() {
    var taiKhoan = getEle("#tknv").value;
    var hoTen = getEle("#name").value;
    var email = getEle("#email").value;
    var matKhau = getEle("#password").value;
    var ngayLam = getEle("#datepicker").value;
    var luongCoBan = +getEle("#luongCB").value;
    var chucVu = getEle("#chucvu").value;
    var gioLamThang = +getEle("#gioLam").value;
    return new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLamThang)
}

function renderNV(dsnv) {
    var contentSV = "";
    for (var i = 0; i < dsnv.length; i++) {
        var nv = dsnv[i];
        var contentHTML = "";
        contentHTML = `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tinhTongLuong(nv.chucVu, nv.luongCoBan)}</td>
                <td>${nv.xepLoaiNV(nv.gioLamThang)}</td>
                <td>
                    <button class="btn btn-warning my-1" onclick="hienThiNV('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal">Sửa</button>
                    <button class="btn btn-danger my-1" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button>
                </td>
            </tr>
        `
        contentSV += contentHTML;
    }
    getEle("#tableDanhSach").innerHTML = contentSV;
}