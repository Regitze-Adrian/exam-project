<template>
    <header>
        <div class="logo"> placeholder </div>
        <div class="links">
            <router-link to="/login"> Login </router-link>
            <router-link to="/"> Home </router-link>
            <router-link to="/products"> Products </router-link>
            <router-link to="/about"> About </router-link>
        </div>
        <div class="shoppingcart"> shoppingcart </div>
    <div>
        <button v-if="isLoggedin">
              <v-btn @click="logOut()">
              Logout
            </v-btn>
        </button>
        </div>
    </header>
</template>

<script setup>

import useUsers from '@/modules/useUsers'

const { logOut } = useUsers()

</script>

<style lang="scss" scoped>
    
header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100%;
    background-color: bisque;
}

.links {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: right;
    
    a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    margin: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>