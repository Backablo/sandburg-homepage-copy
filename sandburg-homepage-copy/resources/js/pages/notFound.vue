<template>
  <div class="error_wrapper">
    <h2>죄송합니다. 해당 페이지를 찾을 수 없습니다.</h2>
    <button class="error_btn" @click="router.push({path: '/'})"><span class="grey_color">메인화면으로 이동</span></button>
  </div>
</template>

<script setup>
  import {ref, reactive, inject, nextTick, onMounted} from 'vue'
  import { useRouter } from 'vue-router';
  // data
  let pageId = 'notFound'
  let router = useRouter()
  // 
</script>
