import { LightningElement, track } from 'lwc';

export default class TrackOrnegi1 extends LightningElement {
   @track customer = {
        adi: "Utku",
        soyadi:"ACER",
        yasi:25
    }
    trackOrnek(event){
        this.customer.adi = event.target.value;
    }
    
}