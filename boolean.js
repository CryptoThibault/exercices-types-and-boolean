let res1 = (true && false) || (false && true)
let res2 = 10 > 11 && 11 > 10
let res3 = (true || false) && true
let res4 = (!true && !false) || (!false && !false)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
let res6 = (!(20 >= 20) && 7 === 7) || true
let res7 = '1' === 1 && '2' == 2 && '3' === 3
let res8 = !res7
let res9 = !res8
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
console.log(`res1 = ${res1}\nres2 = ${res2}\nres3 = ${res3}\nres4 = ${res4}\nres5 = ${res5}\nres6 = ${res6}\nres7 = ${res7}\nres8 = ${res8}\nres9 = ${res9}\nres10 = ${res10}`)