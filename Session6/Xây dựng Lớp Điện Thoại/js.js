class dienThoai {
    constructor(pin) {
        this.pin = pin;
    }
    sudung() {
        document.write("pin hiện tại " + this.pin);
    }
}
var dT = new dienThoai(50);
dT.sudung();

function onOff() {
    alert("bạn đang sử dụng điện thoại");
}