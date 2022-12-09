import { LightningElement, track } from 'lwc';
export default class TrackOrnegi2 extends LightningElement {
    degerler = ""; //2- girilen sayilari yerlestirecegimiz bos bir alan acalim
    @track lstValues = []; //3- girilen sayilari aktaracagimiz dizi (array) actik.
    //4- onchangeHandler() fonksiyonunu olusturalim.Disardan girilen sayiyi yakalayip degiskenimize(degerler) yukleyelim
    onchangeHandler(event) {
        this.degerler = event.target.value;
    }
    //5- sayi girilip butona tiklaninca, sayiyi listeye push edelim
    ekleHandler(event) {
        this.lstValues.push(this.degerler);
    }
}