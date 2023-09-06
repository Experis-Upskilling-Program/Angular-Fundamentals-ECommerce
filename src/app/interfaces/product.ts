import { Info } from "./info";

export interface Product {
    /** Atributos */
    id: number;
    name: string;
    price?: number;                     // ? Opcional
    /** Metodos (Obvio las interfaces no tienen definicion de metodos, ni funcionalidades dentro de ellos) */
}