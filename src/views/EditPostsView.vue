<template>
  <div v-if="isLoggedin">
    <div>
      <div class="EditPostText">
      <h1>
        Here you can add, edit, or delete any product.
      </h1>
      <h2>The price will be displayed in euros.</h2>
    </div>

<div class="outerEditBoxes">
  <v-card class="bg-red-lighten-5 pa-5 text-grey-darken-4">
    <h3 class="text-grey-darken-2 py-1">New Product</h3>
    
    <QuillEditor toolbar="full" theme="snow" v-model:content="AddItemData.description" 
    placeholder="Enter content" 
    contentType="html" 
    ref="myEditor"
    />

    <div> 
      <input type="text" v-model="AddItemData.productTitle" placeholder="Enter a title"><br><br>
      <input type="text" v-model="AddItemData.productPrice" placeholder="Enter a price"><br><br>
      <textarea type="text" v-model="AddItemData.productDescription" placeholder="Enter a description"></textarea><br><br>
      <div class="addButton"><button @click="firebaseAddSingleItem()">ADD DYNAMIC ITEM</button></div>
    </div>

    </v-card>


      <v-card class="bg-red-lighten-4 text-grey-darken-4 ma-5 pa-4" v-for="post in posts" :key="post">
        <h5>PostID: {{post.id}}
            <div> 
      <input type="text" v-model="post.productTitle" placeholder="Enter a title"><br><br>
      <input type="text" v-model="post.productPrice" placeholder="Enter a price"><br><br>
      <textarea v-model="post.productDescription" placeholder="Enter a description"> </textarea>  <br><br>
      <v-btn class="bg-red-darken-1" @click="firebaseDeleteSingleItem(post.id)">delete</v-btn> 
        <v-btn class="bg-teal-darken-1" @click="firebaseUpdateSingleItem(post.id)">edit item</v-btn>
    </div>
        </h5>

      </v-card>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import usePosts from '../modules/usePosts' 
  import { ref, onMounted } from 'vue'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import router from '@/router';
  
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

</script>
  
<style lang="scss">

.outerEditBoxes {
  width: 60%;
  margin: 0 auto;
}

input {
  width: 400px;
  border-style: solid;
}

.EditPostText {
  margin: 50px;

  h1 {
    color: rgb(231, 83, 42);
  }

  h2 {
    color: rgb(225, 130, 89);
  }
}
.addButton {
  height: 50px;
  width: 200px;
  background-color: #e8612c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 0 auto;
  color: white;
}
 
.addButton:hover {
  background-color: #bc2d1a;
}

textarea {
  width: 400px;
  height: 140px;
  border-style: solid;
}

</style>