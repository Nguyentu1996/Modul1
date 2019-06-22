let nokia;
let iphone;
let sent;
let inputNokia;

function ready() {
    nokia = new DienThoai();
    iphone = new DienThoai();
    document.getElementById("btnGuiTin.value").oninput = function() {
        inputNokia = document.getElementById("btnGuiTin").value;
        nokia.inSoan
    }
}