<script lang="ts" setup>
// import * as pdfjs 'pdfjs-dist/webpack'
import {ref, watch} from "vue";
// const props = defineProps({
//     pdf: String
// })
const pdf = ref<any>()
const pages = ref<any>()
// const fetchPDF = (url) => {
//     pdfjs
//         .then(pdfjs => pdfjs.getDocument(url))
//         .then(file => pdf.value = file);
// }
//
// watch(pdf, newVal => {
//     pages.value = [];
//     const promises = range(1, pdf.numPages).map(number => pdf.getPage(number));
//
//     Promise.all(promises).then(pages => (this.pages = pages));
// })
</script>


<template>
    <h1>PDF VIEWER</h1>
  <!--  <pdf :src="'http://admin.libbobur.uz/services/bookms/api/content-api/29ead676-4604-4a5a-9e58-cbdaab71d2bd.pdf'" ></pdf>-->
</template>