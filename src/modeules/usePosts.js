import { db } from '../firebase.js'
import { ref } from 'vue' // creating exported function we can use throughout the system
import { collection, onSnapshot, addDoc/* , doc, deleteDoc, addDoc, updateDoc */ } from "firebase/firestore";


const usePosts = () => {
    
    const posts = ref([]) 
    const postDataRef = collection(db, "posts"); // don't export this, because u only use this function in this file
    
    const AddItemData = ref({description:null})
    
  //  const myEditor = ref('') // using this to update VueQuill content, when we clear it
  //  let snackbar = ref(false)

    // Grab data from firebase (realtime)
    const getPostsData = () => {
        onSnapshot(postDataRef, (snapshot) => {
            posts.value = snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id 
            }
            })
        })
    }

/* let formInput = ref({ // lav inputfelter til næste gang, den value værdien ind nedenfor
    title: post.title.value
}) */
 
// Add static data to Firebase
const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "posts"), {
        productTitle: AddItemData.value.productTitle,
        productPrice: AddItemData.value.productPrice,

    })
  }
/* const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "posts"), {
        productTitle: "Test Title", //AddItemData.value.productTitle,
        productPrice: "230" //AddItemData.value.productPrice,
        // quoteNumber: AddItemData.value.addPostQuoteNumber
    }).then(() => {
     
   //  myEditor.value.setContents('') // using a bound ref="myEditor" to clear and update to vueQuill
    // snackbar.value = true
     // AddItemData.value = ref({ })
    }) // promise
}  */
/* 
// Make Delete #4.1
const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(db, "posts", id))
    // debugger 
    //console.log("is deleted", id)
  }

const firebaseUpdateSingleItem = async(id) => {

await updateDoc(doc(postDataRef, id), {
  title: posts.value.find(post => post.id === id).title,
  description: posts.value.find(post => post.id === id).description,
  quoteNumber: posts.value.find(post => post.id === id).quoteNumber
});
} */

    return {
        posts,
        getPostsData,
        AddItemData,
        // myEditor,
        // snackbar,
        // firebaseDeleteSingleItem,
         firebaseAddSingleItem,
        // firebaseUpdateSingleItem
    }
    // blue = variables, yellow = functions
}

export default usePosts