({
    clickCreateItem: function(component, event, helper) {

        // Simplistic error checking
        var validItem = true;

        // Name must not be blank
        var nameField = component.find("itemname");
        var itemname = nameField.get("v.value");
        if ($A.util.isEmpty(itemname)){
            validItem = false;
            nameField.set("v.errors", [{message:"Item name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        // Quantity must not be blank
        var quantityField = component.find("quantity");
        var quantity = nameField.get("v.value");
        if ($A.util.isEmpty(quantity)){
            validItem = false;
            quantityField.set("v.errors", [{message:"Quantity can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }

        var priceField = component.find("price");
        var price = priceField.get("v.value");
        if ($A.util.isEmpty(price)){
            validItem = false;
            priceField.set("v.errors", [{message:"Price can't be blank."}]);
        }
        else {
            quantityField.set("v.errors", null);
        }


        if(validItem){
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));
            //helper.createItem(component, newItem);
            //        var theItems = component.get("v.items");
 
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newItem = JSON.parse(JSON.stringify(item));
 
        console.log("Items before 'create': " + JSON.stringify(theItems));
		theExpenses.push(newItem);
		component.set("v.expenses", theItems);
		console.log("Items after 'create': " + JSON.stringify(theItems));
        theItems.push(newItem);
        component.set("v.items", theItems);
        
        }
    }
})