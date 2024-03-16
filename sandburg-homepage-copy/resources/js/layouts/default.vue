<template>
  <main class="default_layout_wrapper">
    <header class="default_header">
      <div>
        헤더 영역
      </div>
      <div>
        퍼센트 영역
      </div>
    </header>
    <main class="default_main">
      <router-view />
    </main>
    <footer class="default_footer">푸터</footer>
  </main>
</template>

<script setup>
  import {ref, reactive, inject, nextTick, onMounted} from 'vue'

  // data
  let pageId = 'defaultLayout'
</script>
