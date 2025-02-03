
// Enums// Enums
// enum OrderStatus {
//     PENDING = 'PENDING',
//     CONFIRMED = 'CONFIRMED',
//     PREPARING = 'PREPARING',
//     OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
//     DELIVERED = 'DELIVERED',
//     CANCELLED = 'CANCELLED'
// }

// // Interfaces
// interface ILocation {
//     latitude: number;
//     longitude: number;
//     address: string;
// }

// interface INotification {
//     userId: string;
//     message: string;
//     timestamp: Date;
// }

// Base class for users
// abstract class User {
//     constructor(
//         protected id: string,
//         protected name: string,
//         protected email: string,
//         protected phone: string
//     ) {}

//     getId(): string {
//         return this.id;
//     }

//     getName(): string {
//         return this.name;
//     }
// }

// Customer class
// class Customer extends User {
//     private orders: Order[] = [];
//     private location: ILocation;

//     constructor(
//         id: string,
//         name: string,
//         email: string,
//         phone: string,
//         location: ILocation
//     ) {
//         super(id, name, email, phone);
//         this.location = location;
//     }

//     addOrder(order: Order): void {
//         this.orders.push(order);
//     }

//     getOrders(): Order[] {
//         return [...this.orders];
//     }

//     getLocation(): ILocation {
//         return { ...this.location };
//     }
// }

// MenuItem class
// class MenuItem {
//     constructor(
//         private id: string,
//         private name: string,
//         private description: string,
//         private price: number,
//         private available: boolean = true
//     ) {}

//     getId(): string {
//         return this.id;
//     }

//     getName(): string {
//         return this.name;
//     }

//     getPrice(): number {
//         return this.price;
//     }

//     isAvailable(): boolean {
//         return this.available;
//     }

//     setAvailable(available: boolean): void {
//         this.available = available;
//     }
// }

// Restaurant class
// class Restaurant extends User {
//     private menu: MenuItem[] = [];
//     private location: ILocation;
//     private isOpen: boolean = false;

//     constructor(
//         id: string,
//         name: string,
//         email: string,
//         phone: string,
//         location: ILocation
//     ) {
//         super(id, name, email, phone);
//         this.location = location;
//     }

//     addMenuItem(item: MenuItem): void {
//         this.menu.push(item);
//     }

//     removeMenuItem(itemId: string): void {
//         this.menu = this.menu.filter(item => item.getId() !== itemId);
//     }

//     getMenu(): MenuItem[] {
//         return [...this.menu];
//     }

//     setOpen(isOpen: boolean): void {
//         this.isOpen = isOpen;
//     }

//     isAvailable(): boolean {
//         return this.isOpen;
//     }
// }

// OrderItem class
// class OrderItem {
//     constructor(
//         private menuItem: MenuItem,
//         private quantity: number
//     ) {}

//     getMenuItem(): MenuItem {
//         return this.menuItem;
//     }

//     getQuantity(): number {
//         return this.quantity;
//     }

//     getTotalPrice(): number {
//         return this.menuItem.getPrice() * this.quantity;
//     }
// }

// DeliveryAgent class
// class DeliveryAgent extends User {
//     private available: boolean = true;
//     private currentLocation: ILocation;
//     private currentOrder: Order | null = null;

//     constructor(
//         id: string,
//         name: string,
//         email: string,
//         phone: string,
//         location: ILocation
//     ) {
//         super(id, name, email, phone);
//         this.currentLocation = location;
//     }

//     isAvailable(): boolean {
//         return this.available;
//     }

//     setAvailable(available: boolean): void {
//         this.available = available;
//     }

//     assignOrder(order: Order): void {
//         this.currentOrder = order;
//         this.available = false;
//     }

//     completeOrder(): void {
//         this.currentOrder = null;
//         this.available = true;
//     }

//     updateLocation(location: ILocation): void {
//         this.currentLocation = location;
//     }
// }

// Order class
// class Order {
//     private items: OrderItem[] = [];
//     private status: OrderStatus = OrderStatus.PENDING;
//     private deliveryAgent: DeliveryAgent | null = null;
//     private createdAt: Date;
//     private updatedAt: Date;

//     constructor(
//         private id: string,
//         private customer: Customer,
//         private restaurant: Restaurant
//     ) {
//         this.createdAt = new Date();
//         this.updatedAt = new Date();
//     }

//     addItem(item: OrderItem): void {
//         this.items.push(item);
//         this.updatedAt = new Date();
//     }

//     removeItem(menuItemId: string): void {
//         this.items = this.items.filter(
//             item => item.getMenuItem().getId() !== menuItemId
//         );
//         this.updatedAt = new Date();
//     }

//     getTotalPrice(): number {
//         return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
//     }

//     assignDeliveryAgent(agent: DeliveryAgent): void {
//         this.deliveryAgent = agent;
//         this.updatedAt = new Date();
//     }

//     updateStatus(status: OrderStatus): void {
//         this.status = status;
//         this.updatedAt = new Date();
//     }

//     getStatus(): OrderStatus {
//         return this.status;
//     }
// }

// // FoodDeliveryService class (Singleton)
// class FoodDeliveryService {
//     private static instance: FoodDeliveryService;
//     private customers: Map<string, Customer> = new Map();
//     private restaurants: Map<string, Restaurant> = new Map();
//     private deliveryAgents: Map<string, DeliveryAgent> = new Map();
//     private orders: Map<string, Order> = new Map();

//     private constructor() {}

//     static getInstance(): FoodDeliveryService {
//         if (!FoodDeliveryService.instance) {
//             FoodDeliveryService.instance = new FoodDeliveryService();
//         }
//         return FoodDeliveryService.instance;
//     }

//     registerCustomer(customer: Customer): void {
//         this.customers.set(customer.getId(), customer);
//     }

//     registerRestaurant(restaurant: Restaurant): void {
//         this.restaurants.set(restaurant.getId(), restaurant);
//     }

//     registerDeliveryAgent(agent: DeliveryAgent): void {
//         this.deliveryAgents.set(agent.getId(), agent);
//     }

//     getAvailableRestaurants(): Restaurant[] {
//         return Array.from(this.restaurants.values()).filter(restaurant => 
//             restaurant.isAvailable()
//         );
//     }

//     createOrder(
//         customerId: string,
//         restaurantId: string,
//         items: { menuItemId: string; quantity: number }[]
//     ): Order {
//         const customer = this.customers.get(customerId);
//         const restaurant = this.restaurants.get(restaurantId);

//         if (!customer || !restaurant) {
//             throw new Error('Customer or restaurant not found');
//         }

//         const order = new Order(
//             `ORDER_${Date.now()}`,
//             customer,
//             restaurant
//         );

//         items.forEach(item => {
//             const menuItem = restaurant.getMenu().find(mi => mi.getId() === item.menuItemId);
//             if (menuItem && menuItem.isAvailable()) {
//                 order.addItem(new OrderItem(menuItem, item.quantity));
//             }
//         });

//         this.orders.set(order.getId(), order);
//         customer.addOrder(order);

//         this.notifyOrderCreated(order);
//         return order;
//     }

//     assignDeliveryAgent(orderId: string): void {
//         const order = this.orders.get(orderId);
//         if (!order) {
//             throw new Error('Order not found');
//         }

//         const availableAgent = Array.from(this.deliveryAgents.values())
//             .find(agent => agent.isAvailable());

//         if (!availableAgent) {
//             throw new Error('No delivery agents available');
//         }

//         availableAgent.assignOrder(order);
//         order.assignDeliveryAgent(availableAgent);
//         order.updateStatus(OrderStatus.CONFIRMED);
        
//         this.notifyOrderUpdated(order);
//     }

//     private notifyOrderCreated(order: Order): void {
//         // Implementation for sending notifications to relevant parties
//         console.log(`Order ${order.getId()} created`);
//     }

//     private notifyOrderUpdated(order: Order): void {
//         // Implementation for sending notifications about order updates
//         console.log(`Order ${order.getId()} updated to ${order.getStatus()}`);
//     }
// }

// export {
//     OrderStatus,
//     Customer,
//     Restaurant,
//     MenuItem,
//     Order,
//     OrderItem,
//     DeliveryAgent,
//     FoodDeliveryService
// };