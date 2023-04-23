import homeEn from './en/home.json'
import homeRu from './ru/home.json'
import homeUz from './uz/home.json'

import {createI18n} from "vue-i18n";
import type {Directive} from "vue";

const enJson: any = {
    home: homeEn
}
const ruJson: any = {
    home: homeRu
}

const uzJson: any = {
    home: homeUz
}

const translations = {
    en: enJson,
    ru: ruJson,
    uz: uzJson

}

const languages = [
    "en",
    "uz",
    "ru"
]

export const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'uz',
    messages: translations
})
