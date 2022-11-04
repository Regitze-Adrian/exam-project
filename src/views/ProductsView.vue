<template>
    <div>
      
    </div>
<div class="outerProductBox"> 
    <div class="productBox" v-for="product in posts" :key="product">
        <router-link :to="{ name: 'productPage', params:{ id : product.id }}">
        <div class="cardBox">     
           
            <div class="productPhoto">
                 <v-img src="../assets/graphicscardone.jpeg" alt="GraphicsCardOne" /> 
            </div>
            <div class="infoBox">
                <div class="productName">  {{product.productTitle}} </div>
                <div class="productPrice"> {{product.productPrice}} € </div>
            </div>
        </div>
    </router-link>
    </div>
    </div>

    <div class="productCards"> 

    </div>
</template>

<script setup>
import usePosts from '@/modules/usePosts';
import { onMounted } from 'vue';


const { posts, getPostsData } = usePosts()

onMounted(() => {
    getPostsData()
})

</script>

<style lang="scss">
    
body {
    background-color: #FFF;
}

.outerProductBox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 70px;
}

.productCards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
    border: #272727;
    
}

a:link {
    text-decoration: none;
}

.cardBox {
    height: 400px;
    width: 270px;
    background-color: rgb(240, 240, 240);
    filter: drop-shadow(5px 5px 4px rgb(132, 115, 103));
    border-radius: 10px;
    border-style: solid;
    border-color: rgb(243, 78, 78);
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
    justify-content: center; 
    margin: 15px;
    flex-direction: column;
    text-align: left;
    color: #272727;
}



</style>