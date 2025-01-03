interface chair{

    sitOn():void;
}
interface sofa{
    sitOn():void;
}

class modernChair implements chair{
    sitOn(): void {
    console.log("sitting on modernChair");
    }
}

class modernSofa implements sofa{
    sitOn(): void {
        console.log("sitting on modernSofa");
    }
}
class classicChair implements chair{
    sitOn(): void {
        
        console.log("sitting on classicChair");
    }
}
class classicSofa implements sofa{
    sitOn(): void {
        console.log("sitting on classicSofa");
    }
}
interface FurnitureFactory {
    createChair(): chair;
    createSofa(): sofa;
  }
  
  // Concrete Factory for Modern Style
class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): chair {
      return new modernChair();
    }
    createSofa(): sofa {
      return new modernSofa();
    }
}
class ClassicFurnitureFactory implements FurnitureFactory {
    createChair(): chair {
        return new classicChair();
    }
    createSofa(): sofa {
        return new classicSofa();
    }

}
export {
    ModernFurnitureFactory,
    ClassicFurnitureFactory,
    FurnitureFactory,
    chair,
    sofa,
  };
  

  

