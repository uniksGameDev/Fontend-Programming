var isRaining = true
var goingByWalk = true
var goingByCar = false

var takeUmbrella = isRaining && goingByWalk
console.log(takeUmbrella)
takeUmbrella = isRaining && goingByCar
console.log(takeUmbrella)

var priceOfMobile   = 45000
var bankBalance     = 60000
var amIInterested   = true

var willBuyMobile   = priceOfMobile < bankBalance && amIInterested
console.log(willBuyMobile)

bankBalance         = 20000
willBuyMobile       = priceOfMobile < bankBalance && amIInterested
console.log(willBuyMobile)

friendBankBalance   = 70000
willBuyMobile       = priceOfMobile <= bankBalance || priceOfMobile <= friendBankBalance && amIInterested
console.log(willBuyMobile)