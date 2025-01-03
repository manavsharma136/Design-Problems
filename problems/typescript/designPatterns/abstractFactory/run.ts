import { ModernFurnitureFactory, ClassicFurnitureFactory, FurnitureFactory } from "./abstractFactory";

function clientCode(factory: FurnitureFactory): void {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  chair.sitOn();
  sofa.sitOn();
}

// Use ModernFurnitureFactory
const modernFactory = new ModernFurnitureFactory();
console.log("Using Modern Furniture:");
clientCode(modernFactory);

// Use ClassicFurnitureFactory
const classicFactory = new ClassicFurnitureFactory();
console.log("\nUsing Classic Furniture:");
clientCode(classicFactory);
