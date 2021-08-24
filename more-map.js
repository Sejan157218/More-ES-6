const friends = ['sejan','sajal','babu'];

const friendsLengthArray = friends.map(x => x.length);
const friendsLengthArrays = friends.map(x => x.length * 2);

console.log(friendsLengthArray);
console.log(friendsLengthArrays);



const moblie = [{
    name:'poco m2',
    id: '5555',
    price:'15000',
    realmi:{model:'realmi 8',
            prices:'25000',
            ram:{
                ram6:'6GB',
                ram8:'8gb',
            }
        }
    },
    {
        name: 'realmi 2',price:'555',
    }]
const objectName = moblie.map(x=>x.name);
const objectRam = moblie.map(x=>x.price);
moblie.map(x => console.log(x))
moblie.forEach(x => console.log(x))
console.log(objectName,objectRam);