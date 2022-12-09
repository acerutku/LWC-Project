import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    //7-
    eventName1;
    handleButtonClick() {
        this.eventName1 = 'Child butona tiklandi';
    }
    //9I
    eventName2;
    handleButtonClick2(event) {
        this.eventName2 = event.detail; //yeni bilgi.veri child'dan geldigi icin sadece event.detail yazilir.
    }

    eventName3;
    handleButtonClick3(event) {
        this.eventName3 = event.detail.isim + ' ' + event.detail.soyisim;
    }
}