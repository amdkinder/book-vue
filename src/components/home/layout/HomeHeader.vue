<template>
  <div class="header">
    <div class="title">
      <h1>§Find Your Next Book</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      <button>Explore Now</button>
    </div>

    <div class="img">
      <img src="src/assets/heap-books-sketch-library-stack-education-symbol_80590-12797.avif" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f1ea;
  padding-bottom: 50px;
  transition: .5s;
  .img {
    transition: .5s;
    img {
      width: 650px; // min width 350
      height: 400px; // min height 200
      object-fit: cover;
      mix-blend-mode: multiply;
      align-items: center;
    }
  }
  .title {
    transition: .5s;
    h1 {
      font-size: 44px;
      display: flex;
      flex-wrap: wrap;
    }
    p {
      margin-top: 20px;
      max-width: 400px;
    }
    button {
      margin-top: 20px;
      border: none;
      background: var(--color);
      padding: 10px 20px;
      color: white;
    }
  }
}

@media  screen and (max-width: 1300px) {
  .header {
    .img {
      img {
        width: 450px;
        height: 250px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .header {
    .img {
      img {
        width: 350px;
        height: 200px;
      }
    }
    .title {
      h1 {
        font-size: 33px;
      }
      p {
        max-width: 300px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .header {
    display: grid;
    .title {
      margin-bottom: 15px;
    }
  }
}


</style>