<template>
  <h1>Books</h1>
  <div class="books">
    <div class="book" v-for="(book, index) in books" :key="index">
      <img src="src/assets/heap-books-sketch-library-stack-education-symbol_80590-12797.avif" alt="">
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
import {ref} from "vue";

const books = ref([
  {
    id: 1,
    title: 'Sariq dev',
    description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
        '\n' +
        'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
        '\n' +
        'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
    publishedYear: 2013
  },
  {
    id: 1,
    title: 'Sariq dev',
    description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
        '\n' +
        'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
        '\n' +
        'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
    publishedYear: 2013
  },
  {
    id: 1,
    title: 'Sariq dev',
    description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
        '\n' +
        'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
        '\n' +
        'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
    publishedYear: 2013
  },
  {
    id: 1,
    title: 'Sariq dev',
    description: 'Khudayberdi Tukhtabaev was an Uzbek writer of children\'s stories. he studied at the Department of Philology at the University of Central Asia from 1950 until 1955. He worked for a time as a newspaper journalist, including at Tashkent haqiqati (The Truth of Tashkent) and Qizil O’zbekiston (Red Uzbekistan), and he was the editor of the monthly magazine Guliston. From 1972 until 1977, he worked as chief editor at Yosh Gvardiya (Young Guard) publishing house, and as assistant to the chief editor at Shark Yulduzi (Western Star) newspaper. In those days, he also worked as chief of editing at Yosh Kuch (Young Strength) newspaper.\n' +
        '\n' +
        'To\'xtaboyev began his career as a children\'s writer in 1958. He created the collection of stories Shoshqoloq (Hasty) in 1962, followed by other collections: Yosh Gvardiya (Young Guard), Sir Ochildi (The Secret Revealed), and Sehrli Qolpoqcha (A Magic Hat) (1965). To\'xtaboyev\'s writing was popular throughout Uzbekistan, and many children read his books as part of their school studies.\n' +
        '\n' +
        'To\'xtaboyev worked at the Kamalak publishing house as an editor, and then as lead editor. From 1960 until 1970, his most popular books were translated into other languages.\n',
    publishedYear: 2013
  },
])
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