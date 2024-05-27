const x = 5;
let result = 0;

for (let i = 0; i <= x; i++) {
	result = result + i;
}

let whileResult = 0;
let i = 1

while (i <= x) {
	whileResult = whileResult + i;
	i ++;
}

console.log(result)
console.log(whileResult)