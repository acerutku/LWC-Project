import { LightningElement } from 'lwc';

export default class NameUpper extends LightningElement {
    fName = "Utku";
    lName = "Acer";

    get fullUpper(){ //get method
       // return this.fName.toUpperCase() + ' ' + this.lName.toLowerCase();
       return `Name lastName: ${this.fName.toUpperCase()} ${this.lName.toUpperCase()}`; 
    }
}