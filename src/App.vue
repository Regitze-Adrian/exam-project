<template>
  <HeaderComponent />
 <router-view/>
 <FooterComponent />
</template>

<script setup>

import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


let auth
const isLoggedin = ref(false)

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      isLoggedin.value = true
    }
    else {
      isLoggedin.value = false
    }
  })
})

/* export default {
  components: {
    HeaderComponent,
    FooterComponent,
}
} */

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
