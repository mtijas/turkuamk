package task.account;

public class Account {
    String name;
    Double balance;
    String address;

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Account for ");
        sb.append(name);
        sb.append("\nBalance: ");
        sb.append(balance);
        sb.append("\nAddress: ");
        sb.append(address);
        return sb.toString();
    }
}
