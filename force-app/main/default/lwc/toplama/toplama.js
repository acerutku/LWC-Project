import { LightningElement } from 'lwc';

export default class Toplama extends LightningElement {
    num1 = 5;
    num2 = 7;
    get toplam(){
        //return this.num1 + this.num2;
        //return `${this.num1} + ${this.num2}`; //back tik kullandigimizda concatinate yapar
        return `${parseInt(this.num1) + parseInt(this.num2)}`;
    }
    handleNum1(event){
        this.num1 = event.target.value;
    }
    handleNum2(event){
        this.num2 = event.target.value;
    }
}