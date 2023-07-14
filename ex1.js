const salary = Number( prompt("Введіть розмір вашої зарплати"))
const increase = 15
const NewPrice = salary + (salary * increase) / 100
console.log(NewPrice);
const taxes = 10
const newPrice2 = NewPrice - (taxes * NewPrice) / 100 
console.log(newPrice2);
const price = 190
console.log(newPrice2 - price);
const result = alert(newPrice2 - price);