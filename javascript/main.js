function calc() {
    let price = 1000;
    let amountInput =document.querySelector("input[name=darabszám]");
    let showAmount = document.querySelector("span.showAmount");
    
    let amount = parseInt(amountInput.value) *price;
    showAmount.innerHTML = amount;

}

