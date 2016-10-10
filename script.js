function whenClicked() {
  console.log("function run")
  return "1111"
}

var a = whenClicked()
var b = whenClicked

console.log(a.toString())
console.log(b.toString())


