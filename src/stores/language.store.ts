import {defineStore} from "pinia";
import {ref} from "vue";

export const useLanguageStore = defineStore('lang', () => {
    const currentLang = ref<string>("uz")

    const setLanguage = (lang: string) => {
        currentLang.value = lang
    }

    const allLanguageOptions = ref([
        {
            name: 'English',
            code: 'en',
            icon: 'english'
        }, {
            name: 'Русский',
            code: 'ru',
            icon: 'russian'
        }, {
            name: 'O\'zbekcha',
            code: 'uz',
            icon: 'uzbek'
        },
    ]);

    return {currentLang, allLanguageOptions, setLanguage}
})

