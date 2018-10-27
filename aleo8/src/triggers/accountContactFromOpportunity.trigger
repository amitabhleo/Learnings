/*
	@author Amitabh Date June 18, 2018
	Creating a contact with the Opportunity name every time the Opportunity is modified
	and the condition is met will be using an after trigger as a new contact has to be created
*/
trigger accountContactFromOpportunity on Opportunity (after insert, after update) {
	//Step1 Passing the values of Account Ids in a set
	Set <ID> acctId = new Set<ID>();
    for(Opportunity oppty:Trigger.new){
        acctId.add(oppty.AccountId);
    }
	//Step2 quering all the opportunities for the Opportunity name under the account	
    Map<Id,Opportunity> opptMap = New Map<Id,Opportunity>(
        [Select Id,AccountId,Name from Opportunity where AccountId IN: acctId]);
    // Old approach, no need to query the 
       	/*
       	Set<Id> optyId = new Set<Id>(opptMap.keyset());
    	List<Opportunity> oppts = new List<Opportunity>(
    	[Select Id,AccountId,Name from Opportunity where Id IN: optyId]);
    */
	//Step3 passing the values of the Map which is list into the contact and add then to a new list
	List <Contact> conts = new List<Contact>();
    for (Opportunity oppty2 : opptMap.values()){
        Contact cont = new Contact(LastName = oppty2.Name,AccountId = oppty2.AccountId);
        conts.add(cont);
    }
    
	//Step4 updating the contact 
	upsert conts;
}