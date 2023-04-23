<template>
    <div class="navbar">
        <h1>And.Lib</h1>

        <div class="div-ul" :class="{'active-navbar': isShowDivIf}">
            <a href="#books">
                <div v-t="{path: 'home.menu.books'}">Books</div>
                <div><span></span></div>
            </a>
            <a href="#categories">
                <div v-t="{path: 'home.menu.categories'}">Categories</div>
                <div><span></span></div>
            </a>
            <a href="#footer">
                <div v-t="{path: 'home.menu.contact'}">About Us</div>
                <div><span></span></div>
            </a>
            <a href="#">
                <div>
                    <Dropdown v-model="$i18n.locale" :options="allLanguageOptions" option-label="name"
                              option-value="code"></Dropdown>
                </div>
                <div><span></span></div>
            </a>
            <span class="close" @click="() => isShowDivIf = !isShowDivIf">
        <CloseNavbarIcon/>
    </span>
        </div>

        <button class="menu" @click="() => isShowDivIf = !isShowDivIf">
            <OpenNavbarIcon/>
        </button>
    </div>

</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import CloseNavbarIcon from "@/components/icons/CloseNavbarIcon.vue";
import OpenNavbarIcon from "@/components/icons/OpenNavbarIcon.vue";
import {useLanguageStore} from "@/stores/language.store";
import {storeToRefs} from "pinia";


const isShowDivIf = ref(false)
const languageStore = useLanguageStore()
const {allLanguageOptions, currentLang} = storeToRefs(languageStore)

watch(currentLang, (newLang) => {
    console.log(newLang)
})


</script>

<style scoped lang="scss">
.navbar {
  background: #f8f1ea;
  display: flex;
  justify-content: space-between;
  padding: 20px 10vw;
  border-radius: 1rem 1rem 0 0;

  .div-ul {
    display: flex;
    list-style: none;

    a:hover {
      border-bottom: 1px solid #333;
      transition-delay: 0.2s;
    }

    .close {
      display: none;
    }

    a {
      transition-delay: 0.2s;
      margin: 10px 30px;
      display: block;
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;

      .active {
        display: flex;
        height: 2px;
        width: 20px;
        background: black;
        animation: active-animation .5s ease-in;
      }
    }
  }

  .menu {
    display: none;
    border: none;
    background: none;
  }
}

@keyframes active-animation {
  0% {
    width: 0;
  }
  100% {
    width: 20px;
  }
}


@media screen and (max-width: 860px) {
  .navbar {
    .menu {
      display: block;
    }

    .div-ul {
      backdrop-filter: blur(5px);
      display: grid;
      position: fixed;
      transition: .5s;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(248, 241, 234, 0.8);
      text-align: center;
      z-index: 1001;
      grid-auto-rows: max-content;
      transform: translateX(100%);


      .close {
        display: flex;
        position: fixed;
        top: 0;
        right: 10px;

        svg {
          width: 30px;
          height: 50px;
        }
      }

      a {
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }

    .active-navbar {
      transform: translateX(0);
    }
  }
}

</style>