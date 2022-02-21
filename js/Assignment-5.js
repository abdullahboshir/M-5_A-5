function moneyMaster(item) {
    const foodInput = document.getElementById(item + "-cost").value;
    itemCost = parseInt(foodInput);
    const total = itemCost + itemCost + itemCost;


    if (total > 0) {
        const totalExpensesText = document.getElementById("total-expenses").innerText = total; 
    }
    return balance = document.getElementById("total-balance").innerText = 10000 - total;
};




document.getElementById("calculation-btn").addEventListener("click", function () {
    
    moneyMaster("food");
    moneyMaster("rent");
    moneyMaster("clothes");

   
});


function savingAmount() {
    const savingInput = document.getElementById("saving-input").value;
    const savingAmount = document.getElementById("saving-amount").innerText = 10000 / 100 * savingInput;

    // remaining balance 
    const remainingBalance = document.getElementById("remaining-balance").innerText = savingAmount;
    
};


document.getElementById("save-button").addEventListener("click", function () {
    savingAmount();
});
