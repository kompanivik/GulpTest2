class Customer {
    name: string;
    idNumber: number;
    
    constructor(name: string, id){
        this.name = name;
        this.idNumber = id;
    }
    
    getName(){
        return this.name;
    }
    getId(){
        return this.idNumber;
    }
}