// All the DOM elements we will need and be selecting. 
const currencyELone = document.getElementById('currency-one') // -------------------- ALL THE ELEMENTS
const amountELone = document.getElementById('amount-one')
const currencyELtwo = document.getElementById('currency-two')
const amountELtwo = document.getElementById('amount-two')
const rateEL = document.getElementById('rate')
const calculate = document.getElementById('calculate')


// Fetch exchange rates and update the DOM
function calculateMoney() { // ------------------------------------------------------ THE FUNCTION / LOGIC
    // do the calculation
    const currencyOne = currencyELone.value
    const currencyTwo = currencyELtwo.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currencyTwo]
            rateEL.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
            amountELtwo.value = (amountELone.value * rate).toFixed(2);
        })
}


// event listeners. 
currencyELone.addEventListener('change', calculateMoney) // ------------------------ THE EVENT LISTENERS 
amountELone.addEventListener('input', calculateMoney)
currencyELtwo.addEventListener('change', calculateMoney)
amountELtwo.addEventListener('input', calculateMoney)


calculateMoney(); // -------------------------------------------------------------- THE FUNCTION INVOCATION



