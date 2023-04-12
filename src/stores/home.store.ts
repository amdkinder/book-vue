import {defineStore} from "pinia";
import {ref} from "vue";
import type {IBook} from "@/shared/model/book.model";
import axios from "axios";
import {BASE_URL} from "@/shared/constants";

const useHomeStore = defineStore('home-store', () => {

    const books = ref<IBook[]>([])

    const fetchAllBooks = () => {
        axios.get<IBook[]>(`${BASE_URL}/api/public`)
    }
})