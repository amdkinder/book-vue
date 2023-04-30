import {defineStore} from "pinia";
import {BASE_URL} from "@/shared/constants";
import axios from "axios";

const useContentStore = defineStore('content-store', () => {


    // 29ead676-4604-4a5a-9e58-cbdaab71d2bd.pdf
    const contentUrl = (microService: string, file: string) => `${BASE_URL}/services/${microService}/api/content-api/${file}`

    const upload = (ms: string, file: string) =>
        axios
            .get(contentUrl(ms, file))
            .then(res => {

            })
})