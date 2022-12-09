import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {
    //3C - 
    inputValue;
    //4D
    handleChange2(event) {
        this.inputValue = event.detail.value; //input child'da oldugu icin ve girilen deger parent'ta gosterilecegi icin target yerine deatil yazilir.
    }

    //5E
    handleClick2() {
        const myEvent2 = new CustomEvent('clicked2',{detail: this.inputValue}); //yeni bilgi.iki parametreli
        this.dispatchEvent(myEvent2);
    }
    //6F- parent html'e gec.

}