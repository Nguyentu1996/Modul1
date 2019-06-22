class DienThoai {
    constructor() {
        this.pin = 0;
        this.tinSoan = "";
        this.guiTin = [];
        this.tinden = [];
        this.status = false;

    }
    checkOnOff() {
        return (this.status === true) ? true : false;
    }
    onOff(status) {
        this.status = (status === 1) ? true : false;
    }
    sacPin() {
        setInterval(function() {
            if (this.pin >= 0 && this.pin < 100)
                this.pin += 1;
        }, 6000);
    }
    TinSoan(mess) {
        this.tinSoan = mess;
    }
    inBox(mess) {
        this.tinden.push(mess);
    }
    sentInbox() {
        this.guiTin.push(this.tinSoan);
        return this.tinSoan;
    }
    getInbox() {
        return this.tinSoan.john("");
    }
    getSendInbox() {
        return this.guiTin.join("")
    }
}