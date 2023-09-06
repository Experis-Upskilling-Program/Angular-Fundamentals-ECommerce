export interface Product {
    /** Atributos */
    id: number;
    name: string;
    price?: number;                     // ? Opcional
    description: string | undefined;    // 
    info: {
        price?: number,
        quantity: number,
        type?: string
    }
    /** Metodos (Obvio las interfaces no tienen definicion de metodos, ni funcionalidades dentro de ellos) */
}