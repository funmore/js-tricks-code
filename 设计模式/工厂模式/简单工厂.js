class User extends Father{
    constructor(opt){
        super('father')
        this.name= opt.name;
        this.viewPage = opt.viewPage;
    }
    static getInstance(role){
        switch(role){
            case 'superAdmin':
                return new User({name:'super user',viewPage:'all'})
                break;
            case 'Admin':
                return new User({name:'admin', viewPage:'all amdin '})
        }
    }
}


let superAdmin1= User.getInstance('superAdmin');
let admin1 = User.getInstance('Admin')