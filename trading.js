let isLow = 30000
let isHigh = 80000
let price = 48000
console.log(`The Bitcoin price is ${price} $.`)
if (price <= isLow) {
  console.log('Time to buy!')
}
else if (price >= isHigh) {
  console.log('Time to sell!')
}
else {
  console.log('Just wait!')
}