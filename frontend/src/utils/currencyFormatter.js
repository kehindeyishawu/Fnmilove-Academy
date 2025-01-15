export let currencyFormatter = (numberString) => {
    // Convert the string to a number  
    const number = parseFloat(numberString);

    // Format it to Nigerian currency  
    const formattedCurrency = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(number);

    return formattedCurrency;
}