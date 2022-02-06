import { IOrder } from "../interfaces/order"; 

export default class Order {
    orderList: IOrder[] = []

    addOrder(newOrder:IOrder){
        this.orderList.push(newOrder)
    }

    UpdateOrder(orderId: string, updatedOrder: IOrder){
        this.orderList.filter(order => {
            if(order.id === orderId){
                order = updatedOrder
            }
        })
    }
}

//defalt significa que esse documento só pode ter um export
