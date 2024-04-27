document.getElementById("mortgageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var loanTerm = parseInt(document.getElementById("loanTerm").value);
    
    var monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    document.getElementById("result").innerHTML = "<p>Your monthly payment will be $" + monthlyPayment.toFixed(2) + "</p>";
});

// researched how to use Math.pow() from W3Schools as my previous implementation was not working

function calculateMonthlyPayment(loanAmount, interestRate, loanTerm) {
    var monthlyInterestRate = interestRate / 100 / 12;
    var numberOfPayments = loanTerm * 12;
    var monthlyPayment = (loanAmount * monthlyInterestRate) / 
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return monthlyPayment;
}