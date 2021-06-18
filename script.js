somar(10)
function somar() {
var multiplosde3 = 0;
var multiplosde5 = 0;
for (i = 0; i <= 1000; i++) {
     multiplosde3 += (i % 3 == 0) ? i : 0;
     multiplosde5 += (i % 5 == 0) ? i : 0;
}
document.write(multiplosde3 + multiplosde5)
}