<template>
  <h1 v-t="{path: 'home.menu.books'}">Books</h1>
  <div class="books">
    <div class="book" v-for="(book, index) in books" :key="index">
      <img :src="homeStore.getImageUrl(book.imageUrl!!)" alt="">
      <div class="information">
        <h3>{{ book.title }}</h3>
        <p>{{ book.description }}</p>
        <span>{{ book.publishedYear }}</span>
        <button>Read</button>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {useHomeStore} from "@/stores/home.store";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()
const {books} = storeToRefs(homeStore)

onMounted(() => {
    homeStore.fetchAllBooks()
})

</script>

<style scoped lang="scss">
.main {
  padding-right: 100px;
  padding-left: 100px;
  margin-top: 150px;

  h1 {
    font-size: 44px;
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 600;
  }

  .books {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

    .book {
      padding: 8px;
      width: calc((100% / 4) - 40px);
      border-radius: .5rem;
      margin: 10px;
      transition: .5s;

      .information {
        position: relative;

        p {
          margin-top: 8px;
          width: 70%;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          margin-top: 8px;
          position: absolute;
          right: 0;
          top: 0;
        }

        button {
          margin-top: 8px;
          border: none;
          background: var(--color);
          padding: 8px 10px;
          color: white;
        }
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: contain;
      }
    }

    .book:hover {
      box-shadow: 0 0 10px rgba(10, 18, 32, 0.54);
    }
  }
}

@media screen and (max-width: 1100px) {
  .main {
    .books {
      .book {
        width: calc((100% / 2) - 40px);
      }
    }
  }
}

@media screen and (max-width: 620px) {
  .main {
    .books {
      .book {
        width: calc(100% - 40px);
      }
    }
  }
}

</style>