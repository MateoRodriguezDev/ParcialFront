<script setup lang="ts">
import { useCartStore } from '@/stores/CarStore';
import { reactive, ref } from 'vue';
const cartStore = useCartStore()




</script>

<template>
    <div class="cart">
        <div class="wrapper" v-for="book in cartStore.books" :key="book.id">
        <div class="book-container">
            <div class="mainBook">
                <img :src="book.coverImg" :alt="book.title">
                <div class="bookInfo">
                <p class="bookTitle">{{ book.title }}</p>
                <p class="bookAuthor">{{ book.author }}</p>
                <p class="bookPrice">{{ `$${book.price}` }}</p>
            </div>
            </div>
            <p class="buttonBook" @click="cartStore.removeBook(book)">X</p>
        </div>
    </div>
        <p class="totalPrice">{{ `Precio Total: $${cartStore.totalPrice}` }}</p>
        <button class="confirm">Confirmar Compra</button>
    </div>
</template>


<style scoped>
.cart{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.wrapper{
    background-color: #f3f3f3;
    width: 100%;
}
.book-container{
    padding: 15px;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid #f3f3f3
}
.buttonBook{
    padding: 3px;
    font-weight: 600;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    text-align: center;
    color: #7c7c7c;   
}

.buttonBook:hover{
    cursor: pointer
}

.bookInfo{
    display: flex;
    flex-direction: column;
    margin-left: 9px;
}

.bookTitle{
    font-weight: 700;
}

.bookAuthor{
    font-weight: 400;
}

.bookPrice{
    font-weight: 100;
    font-size: 15px;
    color: rgb(214, 0, 214);
}

.book-container img{
    width: 40px;
    height: 50px;
}

.mainBook{
    display: flex;
}

.totalPrice{
    font-weight: 100;
    font-size: 20px;
}

.confirm{
    padding: 15px;
    background-color: var(--primary);
    color: white;
    font-weight: 500;
    border-radius: 5px;
    margin-top: 5px;
    width: 70%;
}
</style>