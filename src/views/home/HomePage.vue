<template>
    <div class="main">
        <home-navbar/>
            <home-header/>
            <div id="books" class="section">
                <home-book/>
            </div>
            <div id="categories" class="section">
                <home-categories/>
            </div>
            <div id="footer" class="section">
                <home-footer/>
            </div>
    </div>
</template>

<script setup lang="ts">

import HomeNavbar from "@/components/home/layout/HomeNavbar.vue";
import HomeHeader from "@/components/home/layout/HomeHeader.vue";
import HomeBook from "@/components/home/HomeBook.vue";
import HomeCategories from "@/components/home/HomeCategories.vue";
import HomeFooter from "@/components/home/layout/HomeFooter.vue";</script>

<style scoped lang="scss" src="./home.style.scss"/>
