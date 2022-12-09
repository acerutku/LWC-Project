import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {
    //2-
    num1 = 10;
    num2 = 5;
    index = 0; //b2
    result = this.num1 + this.num2; //bu sekilde olabilir ama getter ile yapalim
    //4-ikinci senaryo: isim listesi olusturalim
    isimListesi = ['Ali', 'Veli', 'Ayse', 'Fatma', 'Huseyin'];

    //3- getter fonksiyonun adi direkt variable olarak kullanilir.return kullanilir
    get toplama() {
        return this.num1 + this.num2;
    }
    get cikarma() {
        return this.num1 - this.num2;
    }
    get carpma() {
        return this.num1 * this.num2;
    }
    get bolme() {
        return this.num1 / this.num2;
    }
    //6-
    get ilkIsim() {
        return this.isimListesi[0];
    }
    get sonIsim() {
        return this.isimListesi[this.isimListesi.length-1];
    }
    //c3
    handleBlur(event) {
        this.index = event.target.value;
    }

    get girilenIndex() {
        if (this.index >= 0 && this.index < this.isimListesi.length) {
            return this.isimListesi[this.index];
        } else {
            alert("Lutfen 0-4 arasi bir sayi giriniz")
        }
    }
}