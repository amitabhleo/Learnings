({
	handleClick : function(component, event, helper) {
		var btnClicked = event.getSource();//the button
        var btnMessage = btnClicked.get("v.label");//getting button label
        component.set("v.message",btnMessage);
	}
})