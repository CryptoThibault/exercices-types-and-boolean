let isRainy = false
let isWindy = false
let temperature = 20
if (temperature < 15) {
  isCold = true
} else {
  isCold = false
}
if (isRainy || isWindy || isCold) {
  console.log('Mettez votre manteau.')
} else {
  console.log('Nous n avez pas besoin de manteau.')
}