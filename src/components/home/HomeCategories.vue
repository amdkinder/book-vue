<template>

  <h1 class="title" v-t="{path: 'home.menu.categories'}">Categories</h1>
  <div class="categories">
    <div class="category" v-for="(category, index) in categories" :key="index">
      <img src="@/assets/heap-books-sketch-library-stack-education-symbol_80590-12797.avif" :alt="category.name!">
      <div class="information">
        <p>{{ category.name}}</p>
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>
import {useHomeStore} from "@/stores/home.store";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)
onMounted(() => {
    homeStore.fetchAllCategories()
})

</script>

<style scoped lang="scss">
.title {
  width: 100%;
  display: flex;
  margin-top: 100px;
  margin-bottom: 15px;
  justify-content: center;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  .category {
    text-align: center;
    width: calc((100% / 3) - 262px);
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 8px;
    border-radius: .5rem;
    transition: .5s;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .category:hover {
    box-shadow: 0 0 10px rgba(10, 18, 32, 0.54);
  }
}


@media screen and (max-width: 1500px) {
  .categories {
    .category {
      width: calc((100% / 3) - 140px);
    }
  }
}


@media screen and (max-width: 1100px) {
  .categories {
    .category {
      width: calc((100% / 3) - 40px);
    }
  }
}


@media screen and (max-width: 760px) {
  .categories {
    .category {
      width: calc(100% - 40px);
      margin-top: 15px;
    }
  }
}

</style>