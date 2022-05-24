initImg('#TmpStoveInfo img', [
    '../images/informations/TmpStove1.png',
    '../images/informations/TmpStove2.png',
    '../images/informations/TmpStove3.png',
]);

initImg('#TmpRoomInfo img', [
    '../images/informations/TmpRoom1.png',
    '../images/informations/TmpRoom2.png',
    '../images/informations/TmpRoom3.png',
]);

initImg('#PressureTank img', [
    '../images/informations/PressureTank1.png',
    '../images/informations/PressureTank2.png',
    '../images/informations/PressureTank3.png',
]);

initImg('#ServoStove img', [
    '../images/informations/ServoStove1.png',
    '../images/informations/ServoStove2.png',
    '../images/informations/ServoStove3.png',
    '../images/informations/ServoStove4.png',
]);

initImg('#ServoPipe img', [
    '../images/informations/ServoPipe1.png',
    '../images/informations/ServoPipe2.png',
    '../images/informations/ServoPipe3.png',
    '../images/informations/ServoPipe4.png',
]);

initImg('#WaterLev img', [
    '../images/informations/WaterLev1.png',
    '../images/informations/WaterLev2.png',
    '../images/informations/WaterLev3.png',
]);

initImg('#Mod img', [
    '../images/informations/Mod1.png',
    '../images/informations/Mod2.png',
    '../images/informations/Mod3.png',
    '../images/informations/Mod4.png',
]);

initImg('#GasRoom img', [
    '../images/informations/GasRoom1.png',
    '../images/informations/GasRoom2.png',
    '../images/informations/GasRoom3.png',
]);

initImg('#Event img', [
    '../images/informations/Event1.png',
    '../images/informations/Event2.png',
]);



function initImg(selector, srcArr) {
    const img = document.querySelector(selector);
    Object.assign(img, {
        buf: Object.assign(new Image(), { img }),
        srcArr: [...srcArr],
        changeInterval: 5e3,
        bufIdx: 0,
        change: function () {
            this.style.animationName = 'img-in';
            this.src = this.buf.src || this.nextImage();
            this.buf.src = this.nextImage();
        },
        nextImage: function () {
            this.bufIdx = ++this.bufIdx < this.srcArr.length ? this.bufIdx : 0;
            return this.srcArr[this.bufIdx];
        }
    });
    img.buf.addEventListener('load', loadHandler);
    img.addEventListener('animationend', animEndHandler);
    img.change();
    return img;

    function loadHandler() {
        setTimeout(
            () => this.img.style.animationName = 'img-out',
            this.img.changeInterval
        );
    }
    function animEndHandler({ animationName }) {
        if (animationName === 'img-out')
            this.change();
    }
}