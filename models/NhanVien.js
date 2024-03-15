/* Khởi tạo đối tượng NhanVien */
function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCoBan, _chucVu, _gioLamThang) {
    /* Constructor */
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLamThang = _gioLamThang;
    /* Method */
    this.tinhTongLuong = function (chucVu, luongCoBan) {
        var tongLuong;
        if (chucVu === "Sếp") {
            tongLuong = luongCoBan * 3;
        }
        else if (chucVu == "Trưởng phòng") {
            tongLuong = luongCoBan * 2;
        }
        else {
            tongLuong = luongCoBan;
        }
        return tongLuong;
    }

    this.xepLoaiNV = function (gioLamThang) {
        var xepLoai = "";
        if (gioLamThang >= 192) {
            xepLoai = "Nhân viên xuất sắc";
        }
        else if (gioLamThang >= 176) {
            xepLoai = "Nhân viên giỏi";
        }
        else if (gioLamThang >= 160) {
            xepLoai = "Nhân viên khá";
        }
        else {
            xepLoai = "Nhân viên trung bình";
        }
        return xepLoai;
    }
}