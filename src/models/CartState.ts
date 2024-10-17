import type { Book } from "./BookModel";

export interface CartStoreState {
    books: Book[],
    totalPrice: number
}
