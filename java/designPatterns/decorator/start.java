package decorator;

public class start {
    public static void main(String[] args) {
     pizza p = new plainPizza();
     p.getDescription();
     double g =p.cost();
    System.out.println(g);
    pizzaDecorator cheese =new cheeseDecorator(p);
        System.out.println("plain is an instance of: " + p.getClass().getSimpleName());
        System.out.println("cheese fully qualified class name: " + cheese.getClass().getName());

        if(cheese instanceof pizza){
        System.out.println("yes");
    }
    System.out.println("dsdsd"+cheese.getDescription());
    pizza cheezePizza = new cheeseDecorator(p);
    String des=cheezePizza.getDescription();
    System.out.println(des);
    pizza mushroom=new mushRoomDecorator(cheezePizza);
    System.out.println(mushroom.getDescription());
    }

}
