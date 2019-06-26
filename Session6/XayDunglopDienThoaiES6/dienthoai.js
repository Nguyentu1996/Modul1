class DienThoai {
    constructor() {
        this.pin = 0;
        this.status = false;
        this.soanTin = "";
        this.guiTin = [];
        this.inbox = [];
    }

    onOff() {
        this.status = !this.status;
        return this.status ? 'Mở' : "Tắt";
    }

    sacPin() {
        this.pin = 100;
    }

    soanTin(mess) {
        this.soanTin = mess;
    }

    inBox(mess) {
        this.inbox.push(mess);
    }
    sendInbox() {
        this.guiTin.push(this.soanTin);
        return this.soanTin;
    }

    getIbox() {
        return this.inBox.join("######")
    }

    getSoanTin() {
        return this.soanTin.join("######")
    }
}

var ip = new DienThoai();
var nokia = new DienThoai();
document.getElementById("pinNokia").innerHTML = ip.pin;
document.getElementById("pinIp").innerHTML = nokia.pin;

function onOFF() {
    document.getElementById("btnOnOff").value = ip.onOff();
}

function sac() {
    ip.sacPin();
    document.getElementById("pinNokia").innerHTML = ip.pin;
    nokia.sacPin()
    document.getElementById("pinIp").innerHTML = nokia.pin;
}

function btnSoanTinNhan() {
    ip.soanTin();
    document.getElementById("txtInput").value = ip.soanTin;
    console.log(ip.soanTin);
    nokia.soanTin();
    document.getElementById("txtInputIp").value = nokia.soanTin;
    console.log(nokia.soanTin)
}

function btnGuiTinNhan() {
    var send = nokia.sendInbox(nokia.soanTin);
    alert("đã gửi");
    ip.inBox(send);
    ip.getIbox();

}