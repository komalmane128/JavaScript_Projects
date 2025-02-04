let Data ="Information";
class User {
    constructor (name,email){
        this.name=name;
        this.email=email;
    }
    
    viewData(){
        console.log("Website", Data);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){

        Data ="Updated information";

    }
}
let user1= new User("Komal","komalmane128@gmail.com");
let admin = new Admin("Mane", "komalmane1899@gmail.com")