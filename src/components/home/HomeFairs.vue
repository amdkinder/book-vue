<template>
  <div class="fairs">
    <img src="src/assets/download.png" alt="download">
    <div class="title">
      <div>
        <h1 class="online-books">Online books</h1>
        <h1> Fairs 2023</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, praesentium.</p>
        <button>
          Create Account
          <svg style="margin-bottom: -4px" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-arrow-bar-right"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
          </svg>
        </button>
        <span class="top-right"></span>
        <span class="bottom-right"></span>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.fairs {
  width: 100%;
  background: #0a1220;
  display: flex;
  height: 500px;
  margin-top: 100px;

  img {
    object-fit: cover;
    width: 50%;
    height: 100%;
  }

  .title {
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50%;

    div {
      margin-left: 50px;
      width: 300px;
      position: relative;
      padding: 20px;

      .online-books {
        font-size: 34px;
        margin-top: 50px;
      }

      button {
        border: 1px solid white;
        padding: 10px 20px;
        color: white;
        background: none;
        margin-top: 15px;
      }

      p {
        margin-top: 15px;
        opacity: .8;
      }

      .top-right {
        position: absolute;
        width: 200px;
        right: 0;
        top: 0;
        background: white;
        height: 2px;
      }

      .bottom-right {
        position: absolute;
        width: 2px;
        height: 150px;
        right: 0;
        top: 0;
        background: white;
      }
    }
  }
}

@media screen and (max-width: 840px) {
  .fairs {
    display: flex;
    justify-content: center;

    img {
      display: none;
    }

    .title {
      width: 80%;
    }
  }
}

</style>