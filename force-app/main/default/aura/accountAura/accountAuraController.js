({
    getAccHandler : function(component, event, helper) {

        let action = component.get("c.getAccount");

        action.setCallback(this, function(response){
                        
            let state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.acc", response.getReturnValue());
            }else{
                console.log("FAILED");
            }
        });
        $A.enqueueAction(action);
    },


    onchangeHandler : function(component, event, helper) {

        let action = component.get("c.getAccountParams");

        action.setParams({accName:event.getParam("value")});//3- input a girilen value accName'e yani class a gonderildi

        action.setCallback(this, function(response){

            
                        
            let state = response.getState();
            if(state == 'SUCCESS'){
                component.set("v.acc", response.getReturnValue());
            }else{
                console.log("FAILED");
            }
        });
        $A.enqueueAction(action);
    }
})
