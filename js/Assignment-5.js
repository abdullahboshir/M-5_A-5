function moneyMaster() {
    const foodInput = document.getElementById("food-cost").value;
    const foodCostNumber = parseInt(foodInput);
}




document.getElementById("calculation-btn").addEventListener("click", function () {
    const foodInput = document.getElementById("food-cost").value;
    const foodCostNumber = parseInt(foodInput);
    const rentInput = document.getElementById("rent-cost").value;
    const rentCostNumber = parseInt(rentInput);
    const clothesInput = document.getElementById("clothes-cost").value;
    const clothesCostNumber = parseInt(clothesInput);
    const total = foodCostNumber + rentCostNumber + clothesCostNumber;
    

    const balance = document.getElementById("total-balance").innerText = 10000 - total;


    if (total > 0) {
        const totalExpensesText = document.getElementById("total-expenses").innerText = total; 
    }
});




document.getElementById("save-button").addEventListener("click", function () {
    const savingInput = document.getElementById("saving-input").value;
    const savingAmount = document.getElementById("saving-amount").innerText = 10000 / 100 * savingInput;

    // remaining balance 
    const remainingBalance = document.getElementById("remaining-balance").innerText = 10000 - savingAmount;

    
    
    
});
