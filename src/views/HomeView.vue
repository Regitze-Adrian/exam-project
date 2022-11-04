<template>
  <div class="home">

    <section>
      <div class="hero"> <div class="heroText"> Let's browse!</div> 
      </div>
    </section>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;    
    background-image: url("@/assets/frontpic.jpg");  
    width: 100%;
    height: 600px;

  }

  .heroText {
    font-size: 28px;
    color: #fff;
    transform: translate(-180%, -260%);
  }

  @media only screen and (max-width: 768px) {
    .heroText {
    transform: translate(-80%, -260%);
  }
}

</style>