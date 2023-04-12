import homeEn from './en/home.json'
import {createI18n} from "vue-i18n";

const enJson: any = {
    home: homeEn
}

const translations = {
    en: enJson
}

const languages = [
    "en"
]

export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: translations
})