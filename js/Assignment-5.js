function calculate(recieveAllId) {
    return document.querySelector(recieveAllId);
};


const totalIncome = calculate("#total-income");
const foodInput = calculate("#food-input");
const rentInput = calculate("#rent-input");
const clothesInput = calculate("#clothes-input");
const totalExpense = calculate("#total-expenses");
const totalBalance = calculate("#total-balance");

const calculateBtn = calculate("#calculation-btn");
const saveInput = calculate("#saving-input");
const saveBtn = calculate("#save-button");
const savingAmount = calculate("#saving-amount");
const remainingBalance = calculate("#remaining-balance");




function expenses(food, rent, clothes) {
    return parseInt(food) + parseInt(rent) + parseInt(clothes);
};


calculateBtn.addEventListener("click", function () {
    const IncomeTotal = parseInt(totalIncome.value);
    const expensesTotal = expenses(foodInput.value, rentInput.value, clothesInput.value);
    const balance = IncomeTotal - expensesTotal;


   

    if (IncomeTotal > expensesTotal) {
        totalBalance.innerText = balance;
        totalExpense.innerText = expensesTotal;
    }
    else if ( IncomeTotal < expensesTotal) {
        alert("your balance is low")
    }
    else if (foodInput.value == "" && rentInput.value == "" && clothesInput.value == "") {
        alert("Your Total Input or Expense is blank!")   
    }
    else{
        alert("You have no income"); 
    }
});




function persent(divided) {
    const IncomeTotall = parseInt(totalIncome.value);
    const dividedNumber = parseInt(divided);
    return IncomeTotall * dividedNumber / 100;    
};


function remaining(add) {
    const IncomeTotall = parseInt(totalIncome.value);
    const intotalExpenses = parseInt(add);
    return IncomeTotall - intotalExpenses;    
};


saveBtn.addEventListener("click", function () {
    const saveMoney = persent(saveInput.value);
    savingAmount.innerText = saveMoney;
    

    const expensesTotall = expenses(foodInput.value, rentInput.value, clothesInput.value);

    const intotalExpenses = saveMoney + expensesTotall;
    const totalExpensePlusSabving = remaining(intotalExpenses)
   
   
   
    const IncomeTotal = parseInt(totalIncome.value);

    if (intotalExpenses < IncomeTotal) {
        remainingBalance.innerText = totalExpensePlusSabving;
    }
    else {
        alert("your total income is low")
   }
});







