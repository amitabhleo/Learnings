({
    createExpense: function(component, expense) {
        var theExpenses = component.get("v.expenses");
        //taking a console look
         console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
        theExpenses.push(newExpense);
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newExpense = JSON.parse(JSON.stringify(expense));
       //console look again
        component.set("v.expenses", theExpenses);
        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
        
        theExpenses.push(newExpense);
        component.set("v.expenses", theExpenses);
    }
})