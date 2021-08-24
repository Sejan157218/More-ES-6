// destruction and chaining
const object= {
    property: 'name1',
    id:{
        id2:'id2 value',
        id3:{
            property3:'value3',
        }
    }
}

const {property3} = object.id.id3;
const {id2} = object?.id;
console.log(object.id.id3.property3);
console.log(object?.id?.id2DD);
console.log(property3);
console.log(id2);

//map
const num = [5,6,4,7,8];

const numSum = num.map(x=>x+x);
console.log(numSum);

const objectM= [{
    property: 'name1',
    id:{
        id2:'id2 value',
        id3:{
            property3:'value3',
        }
    }
}]

// const objectMap = objectM.map(object=>object.property);
const objectMap = objectM.map(object=>object.property.length);
console.log(objectMap);



// filter and find

const product = [
    {name:'xiaomi',price:20000},
    {name:'realmi',price:15000},
    {name:'samsung',price:20000},
    {name:'itel',price:25000},
]

const filter = product.filter(x=>x.price>=20000);
const filterFind = product.find(x=>x.price>=20000);
console.log(filter);
console.log(filterFind);


// class and inheritanse


class teamMember{
    name;
    addess;
    constructor(nam,addes){
        this.name = nam;
        this.addess = addes;
    }
}

class support extends teamMember{
    age;
    workingTime =  'working time 9am-6pm';
    constructor(nam,addes,age){
        super(nam,addes);
        this.age = age;
    }
    developer(){
        console.log(this.name,'is a web-developer')
    }
}
const sejan =new support('sejan','BD',25);

console.log(sejan);
sejan.developer();