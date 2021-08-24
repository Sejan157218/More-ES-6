const array = [5,6,7,8,9,1,444,222,444,55,5666,444,777];
const geaterThan400 = array.filter(x=>x>400);
console.log(geaterThan400);
const geaterThan500 = array.find(x=>x>500);
console.log(geaterThan500);


const product = [
    {name:'xiaomi',price:20000},
    {name:'realmi',price:15000},
    {name:'samsung',price:20000},
    {name:'itel',price:25000},
]
const products = product.filter(productx=>productx.price>=15000);
const productsFind = product.find(productx=>productx.price>=15000);
console.log(products);
console.log(productsFind);