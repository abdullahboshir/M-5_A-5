document.getElementById("calculation-btn").addEventListener("click", function () {
    const foodCost = document.getElementById("food-cost").value;
    const foodCostNumber = parseInt(foodCost);
    const rentCost = document.getElementById("rent-cost").value;
    const rentCostNumber = parseInt(rentCost);
    const clothesCost = document.getElementById("clothes-cost").value;
    const clothesCostNumber = parseInt(clothesCost);
    const totalExpenses = foodCostNumber + rentCostNumber + clothesCostNumber;

    
   
});