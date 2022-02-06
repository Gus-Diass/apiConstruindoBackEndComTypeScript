//import { IClient } from "./client";
import { IProduct } from "./product";

export interface IOrder {
    id: string;
    products: IProduct[];
};

// importe é para importar de outro arquivo e serve como para para o export!
// portanto para mim conseguir usar o product aqui precisei importar ele 