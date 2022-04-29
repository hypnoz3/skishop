<<<<<<< HEAD

export interface ShippingAddress {
    fullName: string;
    address: string;
    address2: string;
    city: string;
    state: string;
=======
export interface ShippingAddress {
    fullName: string;
    address1: string;
    city: string;
>>>>>>> 621c30f4e1da6b2d9963ed950f164a1f5dcc11f1
    zip: string;
    country: string;
}

export interface OrderItem {
    productId: number;
    name: string;
    pictureUrl: string;
    price: number;
    quantity: number;
}

export interface Order {
    id: number;
    buyerId: string;
    shippingAddress: ShippingAddress;
    orderDate: string;
    orderItems: OrderItem[];
    subtotal: number;
    deliveryFee: number;
    orderStatus: string;
    total: number;
}