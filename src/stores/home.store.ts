import {defineStore} from "pinia";
import {ref} from "vue";
import type {IBook} from "@/shared/model/book.model";
import axios from "axios";
import {BASE_URL} from "@/shared/constants";
import type {IPost} from "@/shared/model/post.model";
import type {ICategories} from "@/shared/model/categories.model";

export const useHomeStore = defineStore('home-store', () => {

    const books = ref<IBook[]>([])
    const posts = ref<IPost[]>([])
    const categories = ref<ICategories[]>([])

    const fetchAllBooks = () => {
        axios
            .get<IBook[]>(`${BASE_URL}/services/bookms/api/open/books?size=8`)
            .then(res => books.value = res.data || [])
    }

    const fetchAllPosts = () => {
        axios
            .get<IPost[]>(`${BASE_URL}/services/libraryms/api/open/posts`)
            .then(res => posts.value = res.data || [])
    }

    const fetchAllCategories = () => {
        axios
            .get<IPost[]>(`${BASE_URL}/services/bookms/api/open/categories`)
            .then(res => categories.value = res.data || [])
    }

    const getImageUrl = (imageUrl: string) => {
        if (!imageUrl) {
            return "src/assets/heap-books-sketch-library-stack-education-symbol_80590-12797.avif"
        }
        return `${BASE_URL}/services/bookms/api/content-api/${imageUrl}`;
    }


    return {books, posts, categories, fetchAllBooks, fetchAllPosts, getImageUrl, fetchAllCategories}

})