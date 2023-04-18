import {defineStore} from "pinia";
import {ref} from "vue";
import type {IBook} from "@/shared/model/book.model";
import axios from "axios";
import {BASE_URL} from "@/shared/constants";
import type {IPost} from "@/shared/model/post.model";

export const useHomeStore = defineStore('home-store', () => {

    const books = ref<IBook[]>([])
    const posts = ref<IPost[]>([])

    const fetchAllBooks = () => {
        axios
            .get<IBook[]>(`${BASE_URL}/services/bookms/api/open/books?size=8`)
            .then(res => books.value = res.data || [])
    }

    const fetchAllPosts = () => {
        axios
            .get<IPost[]>(`${BASE_URL}/api/open/posts`)
            .then(res => posts.value = res.data || [])
    }


    return {books, posts, fetchAllBooks, fetchAllPosts}

})