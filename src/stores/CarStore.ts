import type { Book } from "@/models/BookModel";
import type { CartStoreState } from "@/models/CartState";
import { defineStore } from "pinia";



export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartStoreState => ({
        books: [],
        totalPrice: 0
    }),
    actions: {
        addBook(book: Book):  void {
            this.books.push(book);
            console.log(this.books)
            this.totalPrice = this.totalPrice + book.price
        },
        removeBook(book: Book): void {
            this.books = this.books.filter((item) => item.id !== book.id);
            this.totalPrice = this.totalPrice - book.price
        },
        
    }
})