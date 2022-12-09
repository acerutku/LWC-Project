import { LightningElement } from 'lwc';

export default class OninputOrnegi extends LightningElement {
    name = ""; /* 1. asama name surname variable olusturduk */
    surName="";
    /* 5. handleInput methodunu olusturur */
    handleInput(event){
         //console.log("degisiklik var"); 6. konsolda degisiklikleri gorduk
         this.name = event.target.value;
         /* 7. JS'deki name degiskenini 
         inputtan girilen value ya esitledik
          */
    } 
    handleSurName(event1){
        this.surName = event1.target.value;
    }
}