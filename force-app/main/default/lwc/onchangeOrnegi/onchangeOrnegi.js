import { LightningElement } from 'lwc';

export default class OnchangeOrnegi extends LightningElement {
    nameSurName =""; /* variable olustur */
    handlerOnchange(event){ /* 4. handlerOnchange methodunu olustur */
        this.nameSurName = event.target.value;
    }
}