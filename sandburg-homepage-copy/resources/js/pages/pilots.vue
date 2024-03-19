<template>
  <div class="default_main_wrapper">
    <div class="main_title">
      <img class="icon_big_size mr-5" src="../assets/img/airplane-svgrepo-com.svg" alt="airplane-svgrepo-com" />
      Pilots →
    </div>
    <div class="grey_box mt-10">
      <div class="mr-10"><img class="left_icon" src="../assets/img/exclamation-triangle-svgrepo-com.svg" alt="exclamation-triangle-svgrepo-com" /></div>
      <div class="grey-box-content">샌드버그 팀은 회사, 그리고 동료들과 함께 성장하고자 합니다. 실력과 열정이 가득한 샌드버그의 파일럿을 소개합니다!</div>
    </div>
  </div>
</template>

<script setup>
  import {ref, reactive, inject, nextTick, onMounted} from 'vue'

  // data
  let pageId = 'pilots'
</script>
