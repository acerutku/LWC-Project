import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    //2-
    clickedButtonLabel;
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
    /* d-- */
    handleClick1(event){
        alert("Child butona tiklandi");

    }
    handleClick2(event){
        alert("Handle 2 fonksiyonunu calistirdi")
    }
    /* iii) renderedCallback fonksiyonu kullanilmalidir
bu fonksiyon eventleri parent a baglamakta kullanilir */

    renderedCallback() {
        this.template.querySelector("c-event-child1").addEventListener("click", this.handleClick2);
        }
}

