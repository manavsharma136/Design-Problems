"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractFactory_1 = require("./abstractFactory");
function clientCode(factory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    chair.sitOn();
    sofa.sitOn();
}
// Use ModernFurnitureFactory
const modernFactory = new abstractFactory_1.ModernFurnitureFactory();
console.log("Using Modern Furniture:");
clientCode(modernFactory);
// Use ClassicFurnitureFactory
const classicFactory = new abstractFactory_1.ClassicFurnitureFactory();
console.log("\nUsing Classic Furniture:");
clientCode(classicFactory);
