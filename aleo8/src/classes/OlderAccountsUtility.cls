//updating ealier 5 accounts and populating the description
//field as "Heritage accounts"
public class OlderAccountsUtility {
    //All methods should be in a method
    public static void updateOlderAccounts() {
      // Get the 5 oldest accounts
      Account[] oldAccounts = [SELECT Id, Description FROM Account ORDER BY CreatedDate ASC LIMIT 5];
      // loop through them and update the Description field
      for (Account acct : oldAccounts) {
          acct.Description = 'Heritage Account';
      }
      // save the change you made
      update oldAccounts;
    }
}