<template>
  <main class="default_layout_wrapper" ref="mainContent" @scroll="fnHandleScroll">
    <header class="default_header">
      <div class="header_title_section">
        <div style="display: flex; align-items: center;">
          <button @click="fnMovePage('/')" class="common_btn">SANDBURG Inc.</button>
          <span class="grey_color mr-5 ml-5" v-if="routerPath != '/'">/</span>
          <button v-if="routerPath == '/welfare'" @click="fnMovePage('welfare')" class="common_btn">
            <img class="icon_small_size mr-5" src="../assets/img/handbag-svgrepo-com.svg" alt="handbag-svgrepo-com" />
            Walfare
          </button>
          <button v-if="routerPath == '/pilots'" @click="fnMovePage('/pilots')" class="common_btn">
            <img class="icon_small_size mr-5" src="../assets/img/airplane-svgrepo-com.svg" alt="airplane-svgrepo-com" />
            pilots
          </button>
        </div>
        <div class="common_btn_wrapper">
          <button class="common_btn btn_icon mr-10">
            <img class="icon" src="../assets/img/search-svgrepo-com.svg" alt="search-svgrepo-com" />
            검색
          </button>
          <button class="common_btn btn_icon">
            <img class="icon" src="../assets/img/share-svgrepo-com.svg" alt="share-svgrepo-com" />
            공유
          </button>
        </div>
      </div>
      <div class="scroll_percent_section" :style="{width: `${scrollPercent}%`}"></div>
    </header>
    <main class="default_main">
      <router-view />
    </main>
    <footer class="default_footer">
      샌드버그 파일럿 지원하기 ✈️
    </footer>
  </main>
</template>

<script setup>
  import {ref, computed, watch, reactive, inject, nextTick, onMounted} from 'vue'
  import { useRouter } from 'vue-router';

  // data
  let pageId = 'defaultLayout'
  let router = useRouter()
  // 스크롤 변수
  let mainContent = ref(null)
  let scrollPercent = ref(0)

  // watch
  watch(
  () => router,
    ( ) => {
      scrollPercent.value = 0
    },
    { deep: true, immediate: true }
  )

  // computed
	let routerPath = computed(() => {
    return router.currentRoute.value.path;
	})
  // methods
  // 라우터 이동
  function fnMovePage(path){
    router.push({path: path})
  }
  // 메인 스크롤 확인
  function fnHandleScroll(){
    let container = mainContent.value
    let scrollTop = container.scrollTop
    let scrollHeight = container.scrollHeight - container.clientHeight
    scrollPercent.value = Math.round((scrollTop / scrollHeight) * 100)
  }
</script>
