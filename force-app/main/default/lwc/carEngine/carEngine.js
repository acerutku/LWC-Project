import { LightningElement , api } from 'lwc';

export default class CarEngine extends LightningElement {
    /* 5-variable i api yazarak public yaptik ki parentta kullanabilelim */
   @api motorModeli = "3.0 Turbo";
    /* 2-bunu olusturduktan sonra html den cagiralim  */
}