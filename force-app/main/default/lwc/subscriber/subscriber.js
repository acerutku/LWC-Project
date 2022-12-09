import { LightningElement, wire } from 'lwc';
//8- once import'lari yapalim.
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from 'c/pubsub'; 

export default class Subscriber extends LightningElement {
//9-
    ismiGoster;

    @wire(CurrentPageReference) pageRef; 
    //10 - uc parametre alacak.(eventName, callback, thisArg)
    connectedCallback() {
        registerListener(
            "publisher", this.showDetails, this
        )
    }
    //callBack fonksiyonu.gonderilen veriyi yakalayan fonksiyon
    showDetails(data) {
        this.ismiGoster = data;
    }

}