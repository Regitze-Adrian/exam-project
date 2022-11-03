<template>
  <div v-if="isLoggedin">
    <div>
      <div class="EditPostText">
      <h1>
        Here you can add, edit, or delete any product.
      </h1>
      <h2>The price will be displayed in euros.</h2>
    </div>

  <v-card class="bg-teal-lighten-5 pa-5 text-grey-darken-4">
    <h3 class="text-grey-darken-2 py-1">New Product</h3>
    
    <QuillEditor toolbar="full" theme="snow" v-model:content="AddItemData.description" 
    placeholder="Enter content" 
    contentType="html" 
    ref="myEditor"
    />


    <!-- <v-btn @click="firebaseAddSingleItem()">Add Static Item</v-btn> -->

    <div> 
      <input type="text" v-model="AddItemData.productTitle" placeholder="Enter a title"><br><br>
      <input type="text" v-model="AddItemData.productPrice" placeholder="Enter a price"><br><br>
      <input type="text" v-model="AddItemData.productDescription" placeholder="Enter a description"><br><br>
      <div class="addButton"><button @click="firebaseAddSingleItem()">ADD DYNAMIC ITEM</button></div>
    </div>

    </v-card>

      <v-card class="bg-amber-lighten-4 text-grey-darken-4 ma-5 pa-4" v-for="post in posts" :key="post">
        <h5>PostID: {{post.id}}
            <div> 
      <input type="text" v-model="post.productTitle" placeholder="Enter a title"><br><br>
      <input type="text" v-model="post.productPrice" placeholder="Enter a price"><br><br>
      <input type="text" v-model="post.productDescription" placeholder="Enter a description"><br><br>
      <v-btn class="bg-red-lighten-3" @click="firebaseDeleteSingleItem(post.id)">delete</v-btn>
        <v-btn class="bg-blue-lighten-3" @click="firebaseUpdateSingleItem(post.id)">edit item</v-btn>
    </div>
        </h5>

        <!-- <QuillEditor toolbar="full" theme="snow" v-model:content="post.description" contentType="html"/> -->
      </v-card>
    </div>
  </div>
  </template>
  
  <script setup>
  // import { db } from '../firebase.js'
//   import { QuillEditor } from '@vueup/vue-quill'
//   import '@vueup/vue-quill/dist/vue-quill.snow.css';

  // import { onMounted } from 'vue'
  import usePosts from '../modules/usePosts' 
  // import useUsers from '@/modules/useUsers'
  import { ref, onMounted } from 'vue'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
import router from '@/router';
  
  // import {  /* getDocs, */ doc, deleteDoc} from "firebase/firestore";
  
  // const posts = ref([]) 
  const { 
    posts, 
    myEditor,
    AddItemData,
    getPostsData, 
    firebaseDeleteSingleItem, 
    firebaseAddSingleItem, 
    firebaseUpdateSingleItem, 
     
  } = usePosts() // destructuring, we just wanna use parts of something, importing it back into our system
  
let auth
const isLoggedin = ref(false)

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      getPostsData(),
      isLoggedin.value = true
    }
    else {
      router.push({ path: '/login' }),
      isLoggedin.value = false
    }
  })
})

/*   const { isLoggedin, isLoggedInTest } = useUsers()
  
  onMounted(() => {
    getPostsData(),
    isLoggedInTest
  }) // standard structure of onMounted
  */ 
</script>
  
<style lang="scss">
  
input {
  width: 60%;
}

.EditPostText {

  margin: 50px;

  h1 {
    color: rgb(234, 232, 235);
  }

  h2 {
    color: rgb(208, 198, 211);
  }
}
.addButton {
  height: 50px;
  width: 200px;
  background-color: rgb(250, 25, 152);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 0 auto;
}

.addButton:hover {
  background-color: rgb(220, 4, 91);
}

</style>