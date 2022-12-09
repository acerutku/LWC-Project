import { LightningElement, track } from 'lwc'; //7-track eklenmeli

export default class SimpleCalculator extends LightningElement {
    //3- degiskenleri tanimlayalim
    number1 = 0;
    number2 = 0;
    result  = 0;
    @track gecmisDegerler = [];
    eskiDeger = false;//13- 

    number1Handler(event){ //4-kullanicinin girdigi sayiyi aldik
        this.number1 = event.target.value;
    }
    number2Handler(event){
        this.number2 = event.target.value;
    }

    toplama(){
        //bir onceki islem sonucunu array e push edecegiz
        this.gecmisDegerler.push(this.result);
        this.result = parseInt(this.number1) + parseInt(this.number2); // 5-string sanip concatinate yapmasin diye parseInt kullandik
        
    }
    cikarma(){
        this.gecmisDegerler.push(this.result);
        this.result = parseInt(this.number1) - parseInt(this.number2);
    }
    carpma(){
        this.gecmisDegerler.push(this.result);
        this.result = parseInt(this.number1) * parseInt(this.number2);
    }
    bolme(){
        this.gecmisDegerler.push(this.result);
        this.result = parseInt(this.number1) / parseInt(this.number2);
    }
    //14- eskiDegerHandler olustur
    eskiDegerHandler(event){
        this.eskiDeger = event.target.checked;
    }

}