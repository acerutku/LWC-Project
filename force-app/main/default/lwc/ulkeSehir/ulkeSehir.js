import { LightningElement } from 'lwc';

export default class UlkeSehir extends LightningElement {
    ulke;
    sehir;
    unlu;
    handleUlke(event){
        this.ulke = event.target.value;

    }
    handleSehir(event){
        this.sehir = event.target.value;

    }
    neyiUnlu(event){
        this.unlu = event.target.value;
    }
}