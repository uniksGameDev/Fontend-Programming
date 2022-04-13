var priceOfMobile   = 40000
var bankBalance     = 60000

if(priceOfMobile < bankBalance)
{
    console.log('All OK... Processing Paymeny...')
}
else
{
    console.log("Sorry, you don't have sufficient bank balance...")
}
console.log('Transaction Complete...\n\n')

// reducing bank balance
bankBalance         = 20000
if(priceOfMobile < bankBalance)
{
    console.log('All OK... Processing Paymeny...')
}
else
{
    console.log("Sorry, you don't have sufficient bank balance...")
}
console.log('Transaction Complete...\n\n')

// creating new variable called credit card
var creditCard = 70000
if(priceOfMobile < bankBalance)
{
    console.log('All OK... Processing Paymeny...')
}
else if(priceOfMobile < creditCard)
{
    console.log("Bank Payment Failed... Credit Card will be used...")
}
else
{
    console.log("Sorry, you don't have sufficient bank balance...")
}
console.log('Transaction Complete...')