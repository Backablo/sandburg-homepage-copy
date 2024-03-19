import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePageUrlStore = defineStore('pageUrl', () => {
  const piniaPageUrl = ref('')

  // getter
  let getPageUrl = computed(() => {
    return piniaPageUrl.value
  })

  // action
  function setPageUrl(path) {
    piniaPageUrl.value = path
  }
  function resetPageUrl() {
    piniaPageUrl.value = ''
  }
  return { piniaPageUrl, getPageUrl, setPageUrl, resetPageUrl }
},
{
  persist: {
    storage: sessionStorage
  }
},
)