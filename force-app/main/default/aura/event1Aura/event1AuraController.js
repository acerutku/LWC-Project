({
    onclickHandler : function(component, event, helper) {
        var eventValue = $A.get("e.c:secondEvent");
        eventValue.fire();
        
    }
})
