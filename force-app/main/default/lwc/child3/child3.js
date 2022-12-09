import { LightningElement } from 'lwc';

export default class Child3 extends LightningElement {
    //3- Iki inputtan gelecek veriyi birlestirmek icin 1 object ve 3 adet fonksiyon olusturalim
    copyObject; //4- object'in orjinali uzerinde calisamayiz. o yuzden kopya olusturduk

    eventObject = {
        isim: '',
        soyisim: ''
    }

    //5- object'teki isime, girilen degiskeni yukleyecek
    handleFirstName(event) {
        this.eventObject.isim = event.detail.value;
    }

    //6-object'teki soyisime, girilen degiskeni yukleyecek
    handleLastName(event) {
        this.eventObject.soyisim = event.detail.value;
    }

    //7- handleClick3'u tanimlayin ve shallow copy olusturun
    handleClick3() {
        this.copyObject = Object.assign({}, this.eventObject); //parametrenin ilki bos aciliyor

        const myEvent3 = new CustomEvent('clicked3', { detail: this.copyObject });
        this.dispatchEvent(myEvent3);
    }

}