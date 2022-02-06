import {  IProduct } from "../interfaces/products";
import { Product } from "../products/Product";


export class ProducdDB {
    productList: IProduct[] = []

    createNewProduct(newProduct: Product)
    this.productList.push(newProduct)    
}

getProductById(productId: string): Product[]{
    return this.productList.filter(({id}) => productId === id)
    }
}