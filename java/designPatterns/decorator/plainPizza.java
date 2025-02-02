package decorator;

public class plainPizza implements pizza{

   @Override
    public  String getDescription(){
        System.out.println("Plain pizza");
        return  "Plain pizza";
    }
    @Override
    public Double cost(){

       return 9.0;
    }
}

abstract class pizzaDecorator implements pizza{

    public pizza decoratedPizza;
    public pizzaDecorator(pizza decoratedPizza){
        this.decoratedPizza=decoratedPizza;
    }
    @Override
    public String getDescription(){
        return  decoratedPizza.getDescription();
    }
    @Override
    public Double cost(){
        return decoratedPizza.cost();
    }
}

class cheeseDecorator extends pizzaDecorator{

    public cheeseDecorator(pizza decoratedPizza){
        super(decoratedPizza);
    }
    @Override
    public  String getDescription(){
        return decoratedPizza.getDescription()+" cheese";
    }
    public Double cost(){
        return decoratedPizza.cost()+30;
    }
}



