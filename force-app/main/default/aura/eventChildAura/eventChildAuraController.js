({
    onclickHandler : function(component, event, helper) {
        var eventValue = component.getEvent("myEvent");
        //register'daki variable getEvent icine yazilir
        eventValue.fire(); //event gonderildi
    }
})