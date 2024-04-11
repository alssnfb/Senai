let arraynumeros1 = [2, 4, 20, 30, 5, 10]
let somaarrays1 = 0

for (let i = 0; i < arraynumeros1.length; i++){
    somaarrays1 += arraynumeros1[i] 
    
}

let arraynumeros2 = [3, 5, 9, 32, 12, 13]
let somaarrays2 = 0

for (let i = 0; i < arraynumeros2.length; i++) {
    somaarrays2 += arraynumeros2[i]
    
}

let somatotalarrays = 0
somatotalarrays = somaarrays2 + somaarrays1
console.log(somatotalarrays)
