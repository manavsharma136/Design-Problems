"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicFurnitureFactory = exports.ModernFurnitureFactory = void 0;
class modernChair {
    sitOn() {
        console.log("sitting on modernChair");
    }
}
class modernSofa {
    sitOn() {
        console.log("sitting on modernSofa");
    }
}
class classicChair {
    sitOn() {
        console.log("sitting on classicChair");
    }
}
class classicSofa {
    sitOn() {
        console.log("sitting on classicSofa");
    }
}
// Concrete Factory for Modern Style
class ModernFurnitureFactory {
    createChair() {
        return new modernChair();
    }
    createSofa() {
        return new modernSofa();
    }
}
exports.ModernFurnitureFactory = ModernFurnitureFactory;
class ClassicFurnitureFactory {
    createChair() {
        return new classicChair();
    }
    createSofa() {
        return new classicSofa();
    }
}
exports.ClassicFurnitureFactory = ClassicFurnitureFactory;
