({
    handleCaptureEvent : function(component, event, helper) {
        alert("Event,Parent Component'ta Capture fazinda handle edildi.");
    },
    handleBubbleEvent : function(component, event, helper) {
        alert("Event,Parent Component'ta Bubble fazinda handle edildi.");
    }
})