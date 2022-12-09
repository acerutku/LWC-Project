import { LightningElement } from 'lwc';

export default class Setter extends LightningElement {
    //1- 3 adet property olusturalim
    name = "cat";
    age = 2; //yeni yas degeri disardan girildiginde bu variable'a atanacak.
    newAge = 0;
    parentAge = 24;
    

    //3-
    updateAge(event) { //kullanicidan alinan degeri newAge'e atadik
       this.newAge = event.target.value; //inputtan girilen yas, hemen age'e atanmaz.Bu islem butona tiklaninca olacak
    }
    //4-
    /* updateOriginalAge() { //3c-1- modifiyeyi set ile yapacagimiz icin yoruma dusurdum
       this.age = this.newAge; //deploy ve test
    } */
    //1a- getter ve setter ekleme. get kullanalim
    get age1() {
        return parseInt(this.age) + 1; //degisiklik yapabilecegimizi gostermek icin 1 ekledim 
    }
    //3c-2 - set kullanalim. Set, bir variable'a yeni bir deger atamak veya modifiye etmek icin kullanilir
    set age1(value) { //value yerine elma'da yazilabilir. kullanicinin girdigi butona tiklaninca value'ya gelir.
        if (value < 0) { //negatif yas girilme ihtimaline karsi yazdik
            alert("Gecerli bir sayi giriniz");
            console.error("Gecersiz yas girildi");
        } else {
            this.age = value;
        }
            
    }
    updateOriginalAge() {
        this.age1 = this.newAge; //ornegin; age2 yazsaniz set bunu gormez.
        //newAge'i direkt this.age = this.newAge; ile get'e gonderebilirdim ama araya set girdi.
    }

    //17- customerDetails object'ini olusturalim
    customerDetails = {
        name: "Tim",
        age: 30
    }
    //18- setter html'e git ve customer ile customerDetails'i birbirine bagla
}