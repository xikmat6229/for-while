let hikmat = [2, 4, 9, 10, 45, 67, 8, 90]
let even = [];
let odd = []
for (let i = 0; i < hikmat.length; i++) {
    const element = hikmat[i];
    if (element % 2 === 0) {
        even.push(element);
    } else if (element % 2 !== 0) {
        odd.push(element)
    }
}
console.log(even);
console.log(odd);
