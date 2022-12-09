import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    /* bir degisken ve method olusturalim*/
    motorModeliDegeri ;
    motor(event){
        this.motorModeliDegeri= event.target.value;
    }
}