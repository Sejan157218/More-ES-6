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