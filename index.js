
    let soHienTai = '';
    let phepToan = '';
    let soTruoc = '';

    function themSo(so) {
    soHienTai += so;
    document.getElementById('hienthi').value = soHienTai;
}

    function chonPhepToan(phep) {
    soTruoc = soHienTai;
    phepToan = phep;
    soHienTai = '';
}

    function tinhKetQua() {
    let ketQua;
    const truoc = parseFloat(soTruoc);
    const hienTai = parseFloat(soHienTai);

    if (isNaN(truoc) || isNaN(hienTai)) return;

    switch (phepToan) {
    case '+':
    ketQua = truoc + hienTai;
    break;
    case '-':
    ketQua = truoc - hienTai;
    break;
    case '*':
    ketQua = truoc * hienTai;
    break;
    case '/':
    ketQua = truoc / hienTai;
    break;
    default:
    return;
}

    soHienTai = ketQua;
    phepToan = '';
    document.getElementById('hienthi').value = ketQua;
}

    function xoaManHinh() {
    soHienTai = '';
    phepToan = '';
    soTruoc = '';
    document.getElementById('hienthi').value = '';
}
