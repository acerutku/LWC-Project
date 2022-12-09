import { api, LightningElement } from 'lwc';

export default class SetterChild1 extends LightningElement {
    calculatedAge;
    @api
    get customerAge(){
        return this.calculatedAge;
    }
    set customerAge(data){
        this.calculatedAge = data*2;
    }
}