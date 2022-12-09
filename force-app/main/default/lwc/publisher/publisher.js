import { LightningElement, wire } from 'lwc';
//2- oncelikle 2 import yapmaliyiz
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
//3-pubsub component js'e bagladik

export default class Publisher extends LightningElement {
//4- sayfadaki iki component'i birbirine wire ile baglayacagiz.
    @wire(CurrentPageReference) pageRef; //5- pageRef variable'dir, veri gonderirken(fire event) bunu kullanacagiz
    //(pageRef, eventName, payload)
    //handleChange'i olusturalim

    handleChange(event) {
        fireEvent(
            this.pageRef, "publisher", event.target.value
            //6- data'mizi publisher ismiyle gonderdik
        )
        
    }
}