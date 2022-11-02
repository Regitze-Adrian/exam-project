<template>
    <div>
      <h1>
        Here you can add, edit, or delete any product.
      </h1>

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
      <button @click="firebaseAddSingleItem()">Add Dynamic Item</button>
    </div>

    </v-card>

      <v-card class="bg-amber-lighten-4 text-grey-darken-4 ma-5 pa-4" v-for="post in posts" :key="post">
        <h5>PostID: {{post.id}}
            <div> 
      <input type="text" v-model="post.productTitle" placeholder="Enter a title"><br><br>
      <input type="text" v-model="post.productPrice" placeholder="Enter a price"><br><br>
      <v-btn class="bg-red-lighten-3" @click="firebaseDeleteSingleItem(post.id)">delete</v-btn>
        <v-btn class="bg-blue-lighten-3" @click="firebaseUpdateSingleItem(post.id)">edit item</v-btn>
    </div>
        </h5>

        <!-- <QuillEditor toolbar="full" theme="snow" v-model:content="post.description" contentType="html"/> -->
      </v-card>
    </div>
  </template>
  
  <script setup>
  // import { db } from '../firebase.js'
//   import { QuillEditor } from '@vueup/vue-quill'
//   import '@vueup/vue-quill/dist/vue-quill.snow.css';

  import { onMounted } from 'vue'
  import usePosts from '../modules/usePosts' 
  
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
  
  
  onMounted(() => {
    getPostsData()
  }) // standard structure of onMounted
  
</script>
  