<template>
    <div class="header">
        <div class="title ">
            <h1 class="home-title">§Z.M.BOBUR nomidagi Andijon Kutubxonasi </h1>
            <!--            <p class="home-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>-->
            <a-button class="home-btn">Explore Now</a-button>
        </div>

        <div class="img">
            <img src="@/assets/heap-books-sketch-library-stack-education-symbol_80590-12797.avif" alt="asss">
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
    max-width: 400px;

    h1.home-title {
      font-size: 44px;
      display: flex;
      flex-wrap: wrap;
      font-weight: bold;
    }

    p.home-content {
      margin-top: 20px;
      max-width: 400px;
    }

    button.home-btn {
      margin-top: 20px;
      border: none;
      background: var(--color);
      padding: 10px 20px;
      color: white;
    }
  }
}

@media screen and (max-width: 1300px) {
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