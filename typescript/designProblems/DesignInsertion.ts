class randomisedSetT <T>{

    private array: T[];
    private map: Map<T,number>;
    constructor(){
        this.array=[];
        this.map=new Map();

    }

    insert(val:T): boolean {
        if(this.map.has(val))return false;
        this.array.push(val);
        this.map.set(val,this.array.length-1);
        return true;
    }

    remove(val:T):boolean{
        if(!this.map.has(val)) return false;

        let index=this.map.get(val)!;
        let lastElement=this.array[this.array.length - 1];
        this.array[index]=lastElement;
        this.map.set(lastElement,index);
        this.array.pop();
        this.map.delete(val);
        return true;
    }

    getRandom():T{

        let index= Math.floor(Math.random()*this.array.length);
        return this.array[index];
    }

}
const s= new randomisedSetT();
s.insert("manav");
s.insert(2);
s.insert(5);
s.remove(5);
console.log("first",s.getRandom());
console.log("second",s.getRandom());
console.log("third",s.getRandom());
console.log("foruth",s.getRandom());
console.log("fifth",s.getRandom());
