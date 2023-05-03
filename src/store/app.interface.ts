export interface Product {
    id?: number,
    uid?: string,
    blend_name?: string,
    origin?: string,
    intensifier?: string,
    notes?: string,
    variety?: String
}
export interface ICOffeeState {
    productList: Product[],
    apiSuccess: boolean;
}