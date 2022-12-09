({
    getMessageHandler : function(component, event, helper) {

        //1- action olusturacagiz
        let action = component.get("c.getApexMessage");//class'taki methodun ismi buraya yazilir.

        action.setCallback(this, function(response){
                        //this(buraya) donecek
            let state = response.getState();// gelen cevabi yerel bir degiskene atadik
            if(state == 'SUCCESS'){
                component.set("v.message", response.getReturnValue());
            }else{
                console.log("FAILED");
            }
        });
        $A.enqueueAction(action);
    }
})
