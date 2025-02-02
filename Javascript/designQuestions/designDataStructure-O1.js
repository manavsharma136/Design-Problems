// problem involves designing a data structure that supports the following operations in O(1) time:
// Insert an element.
// Delete an element.
// Return a random element



class randomisedSet{

    constructor(){
        this.map=new Map();
        this.arr=[];
    }

    insert(val){
       if(this.map.has(val)) return false;
       this.arr.push(val);
       this.map.set(val,this.arr.length-1);
       return true; 
    }
     
    remove(val){
       if(!this.map.has(val)) return false;

         let index=this.map.get(val);                       // index value of map
         let lastElement=this.arr[this.arr.length-1];       // lastElement is array
         this.arr[index]=lastElement;
         this.map.set(lastElement,index);
         this.arr.pop();
         this.map.delete(val);
    }

    getRandom(){
        const randomIndex=Math.floor(Math.random()*this.arr.length);
        return this.arr[randomIndex];
    }

}

const randomised = new randomisedSet();
console.log(randomised.insert(1));
console.log(randomised.insert(2));
console.log(randomised.insert(3));
console.log(randomised.getRandom());

