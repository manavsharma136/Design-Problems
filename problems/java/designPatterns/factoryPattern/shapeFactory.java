package factory;

public class shapeFactory {



    public shape getShape(String shapeType ){
        if(shapeType==null){
            return null;
        }
        if(shapeType=="CIRCLE"){
            return new circle();
        }
        if(shapeType=="RECTANGLE"){
            return new rectangle();
        }
        return null;
    }
}
