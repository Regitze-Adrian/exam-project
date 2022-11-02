<template>
    <div>
      
    </div>

    <div v-for="product in posts" :key="product">
        <div class="cardBox">
            <div class="productPhoto">
                 <img src="../assets/graphicscardone.jpeg" alt="GraphicsCardOne"> 
            </div>
            <div class="infoBox">
                <div class="productName">  {{product.productTitle}} </div>
                <div class="productPrice"> {{product.productPrice}} € </div>
                <v-btn>  </v-btn>
            </div>
        </div>
    </div>

    <div class="productCards"> 
    <!--     <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent /> -->
<!-- add new cards dynamic through firebase -->
    </div>
</template>

<script setup>
import usePosts from '@/modeules/usePosts';
import { onMounted } from 'vue';

//import ProductComponent from '../components/ProductComponent.vue'

const { posts, getPostsData } = usePosts()

onMounted(() => {
    getPostsData()
})

// export default {
//   components: {
//     ProductComponent,
// }
// }
</script>

<style lang="scss">
    
.productCards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
}


.cardBox {
    height: 400px;
    width: 270px;
    background-color: rgb(240, 240, 240);
    filter: drop-shadow(5px 5px 4px #dbdbdb);
    border-radius: 10px;
}

.productPhoto {
    height: 300px;
    width: auto;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        object-fit: contain;
        width:90%;
        height: auto;
    }
}

.infoBox {
    display: flex;
    justify-content: center; // !!!
    margin-left: 10%;
    margin-top: 10%;
    flex-direction: column;
    text-align: left;
    color: #272727;

    .productName {
        font-weight: 300;
    }
}


</style>