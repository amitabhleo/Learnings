/*
@author Amitabh date July 10, 2018
adding an opportunity record after checking if no Opportunty record exits
Checking if an existing opportunity exits will check the recursion
*/
trigger addRelatedRecord on Account (after insert, after update) {
    List <Opportunity> oppList = new List <Opportunity>();
    //Step1 checking getting all the opportunity records for the account
    //getting the related opportunity of the account in a map Signature used below
    //List<Account> ls = [select Id,Name from Account];
    //Map<Id, Account> m = new Map<Id, Account>(ls);
    Map<Id,Account> accsWithOpps = new Map<Id,Account>(
        [Select Id,name,(select Id,name from opportunities)from account where Id IN:Trigger.new]);
    //Step2 will check if the size is 0
    //iterating thru all the accounts
    for(Account a:Trigger.new){
        System.debug('accsWithOpps.get(a.Id).opportunities.size()'+accsWithOpps.get(a.Id).opportunities.size());
        System.debug('accsWithOpps.get(a.Id).size()'+accsWithOpps.get(a.Id).name	);   
        //Step2 insert a new opportunity to that Account where size = 0
        if(accsWithOpps.get(a.Id).opportunities.size()==0){
            //Inserting a new Opportunity
            Opportunity opp = New Opportunity(Name = a.Name +'Opportunity');
            opp.AccountId = a.Id;
            opp.StageName = 'Prospect';
            opp.CloseDate = system.today().addmonths(1);
            //adding this to the opporntunity list
            oppList.add(opp);
        }
        
    }
    insert oppList;
    
}