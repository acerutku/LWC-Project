import { LightningElement } from 'lwc'; /* 1-wire import edilmelidir */ //wire i sildik
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
/* 2-AccountController adinda bir class ve getAccounts() adinda bir method olusturmaliyiz */

export default class WireExample extends LightningElement {
    filterWord="";/* 3-kullanicinin girdigi arama kelimesi bunun icine yuklenecek */
    accounts;
    error;
    //A1- wire i yoruma dusurdum
    //@wire(getAccounts, {filter: '$filterWord'}) accounts; //4- method,methodun icinde yapilacak filtreleme,sonucu icinde tutacak variable(accounts yazdik)
    //4.1 filter kelimesi Apex Methodunun parametre adi olmalidir.
    //4.2 filterWord'un basina dinamik hale getirmek icin $ isarei konulur
    //5- class'imizi olusturalim

    //9- inputa girilen yazilari yakalayip filterWord e yukledik
    handleInput(event){
        this.filterWord = event.target.value;
    }
    //B- Yeni bir fonksiyon olusturacagiz.Bu fonksiyonu da butonla cagiracagiz.
    handleGetAccount(){
        getAccounts({filter: this.filterWord}) //C- $ isareti olmayacak cunku dinamik olmayacak.Butona basilinca gelecekler.
        .then((result) => {
            this.accounts = result;
            this.error = undefined; //accountlar geldiyse hata bostur 
        })
        .catch((error) => {
            this.error = error;
            this.accounts = undefined; //hata var ise accountlar bostur.
        });
        //D- HTML de buton icinde handleGetAccount'u olusturalim
    }
}