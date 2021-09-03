package task.account;

import static java.lang.System.out;

public class UseAccount {
    public static void main(String[] args) {
        Account myAccount = new Account();
        Account yourAccount = new Account();

        myAccount.name = "Kissat";
        myAccount.balance = 23.0;
        myAccount.address = "Kaupunki";
        yourAccount.name = "Koiria";
        yourAccount.balance = 42.0;
        yourAccount.address = "Mehtä";
        
        out.println(myAccount);
        out.println(yourAccount);
    }
}
