<template>
    <div>
        <div class="cardBox">
            <div class="productPhoto">
                 <img src="../assets/graphicscardone.jpeg" alt="GraphicsCardOne"> 
            </div>
            <div class="infoBox">
                <div class="productName"> MSI GeForce RTX 3060 12GB GDDR6 Gaming X </div>
                <div class="productPrice"> 480,20 € </div>
                <v-btn>  </v-btn>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    
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