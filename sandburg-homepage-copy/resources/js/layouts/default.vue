<template>
  <main>
    <header>헤더 영역</header>
    <router-view />
  </main>
</template>

<script setup>
  import {ref, reactive, inject, nextTick, onMounted} from 'vue'

  // data
  let pageId = 'defaultLayout'
</script>
