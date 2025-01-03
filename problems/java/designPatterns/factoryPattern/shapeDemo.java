package factory;

public class shapeDemo {

    public static void main(String[] args) {
        shapeFactory fact=new shapeFactory();
        shape dynamic=fact.getShape("CIRCLE");
        dynamic.draw();

    }
}
