package decorator;

public class mushRoomDecorator extends pizzaDecorator{

    public mushRoomDecorator(pizza pizaDecorator){
        super(pizaDecorator);
        this.decoratedPizza=pizaDecorator;
    }
    @Override
    public String getDescription(){
        return this.decoratedPizza.getDescription()+"Mushroom added";
    }
    @Override
    public Double cost(){
        return this.decoratedPizza.cost()+40;
    }

}
