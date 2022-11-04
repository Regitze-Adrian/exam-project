<template>
    <div>
      
    </div>
<div class="outerProductBox"> 
    <div class="productBox" v-for="product in filteredPostOnId" :key="product">

        <div class="leftBox"> 
            <div class="productPhotoPage">
                 <v-img src="../assets/graphicscardone.jpeg" alt="GraphicsCardOne" /> 
            </div>
        </div>
            
            <div class="rightBox">
                <div class="productNamePage"> <h1> {{product.productTitle}} </h1> 
                    
                </div> <br><br>
                <div class="productPricePage"> 
                    <div class="priceBackground"> <h2> {{product.productPrice}} € </h2>
                        </div> 
                        <div class="addToCart"> Add To Cart </div>
                    </div>
                <div class="productDescription"> {{product.productDescription}} </div>
            </div>
        
    </div>
    </div>

</template>

<script setup>
import usePosts from '@/modules/usePosts';
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';


const { posts, getPostsData } = usePosts()

onMounted(() => {
    getPostsData()
})

const route = useRoute()
const routeId = ref(route.params.id)

let filteredPostOnId = computed(() => {
    return posts.value.filter(i => i.id == routeId.value)
})
// finds post with the same id as the route id that was brought from the ProductsView


</script>

<style lang="scss">
    
 .productBox {
    display: flex;
 }

.leftBox {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rightBox {
    width: 400px;

    h1 {
        font-size: 28px;
    }
}

.productPhotoPage {
    height: auto;
    width: 100%;
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

.productPricePage {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
}

.priceBackground {
    width: 140px;
    height: 50px;
    background-color: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px 0 0 7px;
    margin-right: -7px;
}

.addToCart {
    width: 140px;
    height: 50px;
    background-color: rgb(88, 202, 88);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    color: #fff;
}

.productDescription {
    text-align: left;
}

    
</style>