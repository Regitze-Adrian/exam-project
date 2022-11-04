<template>
    <header>
        <div class="logo"> </div>
        <div class="links">
            <router-link v-if="!isLoggedin" to="/login"> Login </router-link>
            <router-link v-if="isLoggedin" to="/editPostsView"> Edit Products </router-link>
            <router-link to="/"> Home </router-link>
            <router-link to="/products"> Products </router-link>
        </div>
        <div class="shoppingcart"> Cart </div>  
        <button v-if="isLoggedin">
              <v-btn @click="logOut()">
              Logout
            </v-btn>
        </button>
    <div>
      
        </div>
    </header>
</template>

<script setup>

import useUsers from '@/modules/useUsers'

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


const { logOut } = useUsers()

</script>

<style lang="scss" scoped>
    
header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100%;
    background-image: linear-gradient(180deg, #e8612c, #bc2d1a);
}

.links {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: right;
    
    a {
    font-weight: bold;
    color: #f2e5df;
    text-decoration: none;
    padding: 10px;
    margin: 20px;

    &.router-link-exact-active {
      color: #f1df17;
    }
  }
}



</style>