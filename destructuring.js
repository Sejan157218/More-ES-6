const moblie = {
    name:'poco m2',
    id: 5555,
    price:15000,
    realmi:{model:'realmi 8',
            prices:'25000',
            ram:{
                ram6:'6GB',
                ram8:'8gb',
            }}
}


const normal = moblie.name;
const {name,id,price} = moblie;
const {model,prices} = moblie.realmi;
const {ram6,ram8} = moblie.realmi.ram;
console.log(normal);
console.log(name,id,price);
console.log(model);
console.log(ram8);