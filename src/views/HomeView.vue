<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <section>
      <div class="hero">
        <button class="startbtn"> 
          Let's get shopping! 
        </button>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss" scoped>
  
  .hero {
    width: 100%;
    height: 600px;
  }

.startbtn {
  width: 200px;
  height: 60px;
  color: white;
  font-size: 18px;
  background-color: #42b983;
  padding: 15px;
  border-radius: 10px;
  margin-top: 250px;
  filter: drop-shadow(5px 5px 4px #dbdbdb)
}

button {
  border: none;
}

</style>