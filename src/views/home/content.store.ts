import {defineStore} from "pinia";
import {BASE_URL} from "@/shared/constants";
import axios from "axios";
import {ref} from "vue";

export const useContentStore = defineStore('content-store', () => {


    const downloadLoading = ref<boolean>(false)

    const contentUrl = (microService: string, file: string) => `${BASE_URL}/services/${microService}/api/content-api/${file}`

    const setLoading = (bool: boolean) => downloadLoading.value = bool

    const download = (ms: string, file: string, name: string) => {
        setLoading(true)
        axios
            .get(contentUrl(ms, file), {
                responseType: "blob"
            })
            .then(res => {
                console.log("response:", res)
                const FILE = window.URL.createObjectURL(new Blob([res.data]));
                const docUrl = document.createElement('a');
                docUrl.href = FILE;
                docUrl.setAttribute('download', name + '.pdf');
                document.body.appendChild(docUrl);
                docUrl.click();
                setLoading(false)
            })
            .catch(err => {
                console.log("Can not download book: ", err)
                setLoading(false)
            })

    }

    return {download, downloadLoading}

})