class Teamnember{
    name;
    addrees;
    constructor(name,address){
        this.name = name;
        this.addrees = address;
    }
}
class support extends Teamnember{
    support = 'support for jonior developer'
    time(time){
        console.log(this.name,'support time',time);
    }
}

class Appdeveloper extends Teamnember{
    workingTime;
    constructor(name,addess,workTime){
        super(name,addess);
        this.workingTime = workTime;
    }
    support = 'support for App developer'
    time(time){
        console.log(this.name,'support time',time);
    }
}


/*class support{
    name;
    addrees;
    constructor(name,address){
        this.name = name;
        this.addrees = address;
    }
    support = 'support for jonior developer'
    time(time){
        console.log(this.name,'support time',time);
    }
}*/
/*class Appdeveloper{
    name;
    addrees;

    constructor(name,address){
        this.name = name;
        this.addrees = address;
    }
    support = 'support for App developer'
    time(time){
        console.log(this.name,'support time',time);
    }
}*/

const amir = new support('amir','BD');
const skr = new Appdeveloper('skr','BD','9am-6pm');
console.log(amir);
amir.time(11);
console.log(skr);
skr.time(3);