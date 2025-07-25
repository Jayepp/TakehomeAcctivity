function UserAccount(Name){
  return{
    Name: Name,
    Balance: Balance,
    Withdrawn: 0,
    DailyLimit: 10000
  };
}


function Deposits(account, amount){
   account.Balance += amount;
   console.log(account.Name + " Deposit: ₱" + amount.toFixed(2)+ "\nYour new Balance is: ₱"+ account.Balance.toFixed(2) + "\n");
   return;
}

function Withdrawal(account, amount){
  
   if(account.Withdrawn + amount > account.DailyLimit){
     console.log("Sorry, Daily Withdrawal exceeded\n You can only withdraw exact amount of ₱" + account.DailyLimit.toFixed(2) + "\n");
     return;
   }else if(amount > account.Balance){
     console.log("You don't have enough Balance\n Your current Balance is: ₱" + account.Balance.toFixed(2) + "\n");
     return;
   }else{
     account.Balance -= amount;
     account.Withdrawn += amount;
     console.log(account.Name + " Just Successfully Withdrawn amount ₱"+ amount.toFixed(2) + "\nYour remaining balance is: ₱"+account.Balance.toFixed(2) + "\n");
     return;
   }
}

const Abano = UserAccount("Abano");
const Hazel = UserAccount("Hazel");


Deposits(Abano, 5000);
Withdrawal(Abano, 3500);

Deposits(Hazel, 10000);
Withdrawal(Hazel, 5000);
