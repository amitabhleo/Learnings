//This apex class will be used to update the account in  
//defining 2 methods setDefaultValues and setIndustryCode
public class AccountUtil {
	//defining the methods
    public static void setDefultValues (List<Account> accts){
        for (Account a:accts){
            if(a.Description == NULL){
                a.Description = 'Cloud Computing here I come';
            }
            
        }
    }	
     public static void setIndustry (List<Account> accts){
        for (Account a:accts){
            if(a.Industry == NULL){
                a.Industry = 'Cloud Computing';
            }
            
        }
    }		
}