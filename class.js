class Mydeteails{
    name;
    age = 25;
    addess;
    constructor(name,weherelive){
        this.name= name;
        this.addess = weherelive;
    }
    work(myname){
        console.log(myname,'is a developer')
    }    
}

const aboutMe =new Mydeteails('sejan','bd');
const aboutFriend = new Mydeteails('sajal','jamalpur');

console.log(aboutMe);
aboutMe.work('sejan');
console.log(aboutFriend);
aboutFriend.work('sajal');