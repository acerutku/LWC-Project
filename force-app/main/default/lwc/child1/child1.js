import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {
    //3-yeni bilgi: dispatchEvent'i kullanacagiz. Bu, olusturdugumuz custom event'i patrent'ta gorunur ve kullanilabilir yapar.
    handleClick() {
        const myEvent = new CustomEvent('clicked');
        this.dispatchEvent(myEvent);
    }
}