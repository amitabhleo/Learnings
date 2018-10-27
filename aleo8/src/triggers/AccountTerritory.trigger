/*
@author Amitabh July 3, 2018
Calculating the Account Sharing based on the Account pincode
The corresponding pincode will be picked from the Territory
The territory members will be shared with the Account
Please rewrite with the following Steps
*/
trigger AccountTerritory on Account (before insert,after update) {
    //Now that we have got the territory list create a map with Ids and Territory members
    Map<string,Territory__c> terrMap = new Map<string,Territory__c>();
    Map<String,Territory_Members__c> terrMemberMap = new Map<String,Territory_Members__c>();   
    Set<String> billPostCodes = new Set<String>();
    //Step1 find the Account with pincode create
    //Set<String> accountIds = new Set<String>();       
    if(Trigger.isInsert){
        for(Account acc:Trigger.new){
            //passing the BillingPostalCode  to the Set
            if (acc.BillingPostalCode != Null){
                billPostCodes.add(acc.BillingPostalCode);   
            }  
        }
    }Else if(Trigger.isUpdate) {
        //checking for Trigger.old values of old values of BillingPostalCode
        Set<Id> changedAccts = new Set<Id>();
        for(Account acc1:Trigger.new){
            String oldZip = Trigger.oldMap.get(acc1.Id).BillingPostalCode;
            String newZip = acc1.BillingPostalCode;
            if(oldZip <> newZip){
                changedAccts.add(acc1.Id);   
            }
        }
        List<AccountShare> shares = [SELECT Id FROM AccountShare
                                  WHERE AccountId IN :changedAccts
                                    AND RowCause = 'Manual'];
    	delete shares;
    }
    /*
Iterate thru the account for the Territory tried to add 
List<Territory__c> listTerr = ([SELECT Id,Name, Zip_Code__c,
(SELECT Id, User_name__c FROM Territory_members__r)
FROM Territory__c WHERE Zip_Code__c IN: billPostCodes]);       
//add territory members by iterating thru listTerri
for (Territory__c ter: listTerr ){
terrMap.put(ter.Zip_Code__c,ter);
System.debug('Terr name '+ ter.Name);             
}
//after putting values in the Map let us get the values
//System.debug('Territory Map : '+ terrMap ); 
//System.debug('Territory using get'+terrMap.get('201301').Territory_members__r);

*/
    //Step4 I will query the teritory memebrs and put them in a map with the pincode
    //Updating to billPostCodes instead of ListTerr
    List<Territory_Members__c> termembrs =([SELECT Id, User_name__c,Territory_Name__c,
                                            Territory_Name__r.Zip_code__c  
                                            FROM Territory_members__c 
                                            where Territory_Name__r.Zip_code__c IN:billPostCodes ]);
    //Pass the values of Pincode and territory members in a Map
    
    for (Territory_Members__c tm :termembrs){
        terrMemberMap.put(tm.Territory_Name__r.Zip_code__c,tm);
        System.debug('Territory Members ZIP'+tm.Territory_Name__r.Zip_Code__c);
        System.debug('Territory Members name'+tm.Territory_Name__c);
    }
    
    //creating a new AccountShare record
    List <AccountShare> aShares = new List<AccountShare>();
    For(Account ac : Trigger.new){
        //querying for the zipcode and populate the members in account share  
        AccountShare ashare1 = new AccountShare();
        ashare1.AccountId = ac.id;
        ashare1.OpportunityAccessLevel ='Edit';
        ashare1.AccountAccessLevel = 'Edit'; 
        ashare1.UserOrGroupId = terrMemberMap.get(ac.BillingPostalCode).User_name__c;
        aShares.add(ashare1);
        System.debug('AccountShare Acc Id'+ac.Id);
        System.debug('Account Share user id'+terrMemberMap.get(ac.BillingPostalCode).User_name__c);
    }
    Upsert aShares;    
}
/*
for(Account acc1:[SELECT Id, Name, BillingPostalCode FROM Account where BillingPostalCode IN: billPostCode]){
String billPostCode = acc1.BillingPostalCode;



//checking the billing postal code territory
Territory__c terr =( [SELECT Id, Name, Zip_Code__c FROM Territory__c where Zip_Code__c = : acc1.BillingPostalCode]);
listTerr.add(terr);
System.debug('listTerr '+ terr.Name);    
}

//Pickup the territory members
for(Territory__c ter1 :listTerr){
List<Territory_Members__c> terrMembrs= ([SELECT Id, Name, User_Name__c, Territory_Name__c FROM Territory_Members__c
WHERE Territory_Name__c =: ter1.Id]);
System.debug('terrMemebers '+ terrMembrs );
//Populate the territory members in the AccountSharing object

}
for (Account ac1:Trigger.new) {
AccountShare ac = new AccountShare();
ac.Id = AccountId;
ac.AccountAccessLevel = 'edit';
ac.UserOrGroupId = terrMembrs.User_Name__c;
}
*/