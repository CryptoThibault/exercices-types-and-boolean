let isRainy = false
let isSnowy = true
let isSunny = true
let temperature = 5
let clothes = ''
clothes += 't-shirt, '

if (temperature < 10) {
  clothes += 'sweater, '
  clothes += 'coat, '
} else if (temperature >= 10 && temperature < 20) {
  clothes += 'sweater, '
  clothes += 'jacket, '
} else if (temperature >= 10 && temperature < 30) {
  clothes += 'sweater, '
} else {
  clothes += 'vest, '
}
if (temperature < 25) {
  clothes += 'pant, '
} else {
  clothes += 'short, '
}

if (isRainy || isSnowy) {
  clothes += 'umbrella, '
}
if (isSnowy) {
  clothes += 'gloves, '
}
if (isSunny) {
  clothes += 'sunglasses, '
  if (isSunny && temperature > 30)
    clothes += 'cap, '
}
if (temperature < 5) {
  clothes += 'scarf, '
}

console.log(`Je vous recommande de porter: ${clothes}`)