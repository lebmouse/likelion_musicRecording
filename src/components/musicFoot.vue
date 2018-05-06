<template>
  <section>
      <div class="mainBox">
          <div class="contentsBox">
              <div class="box dayBox">
                  TODAY
              </div>
              <div class="box playerBox">
                  플레이어
              </div>
              <div class="box signBox">
                  Logout
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainBox {
    width: 100%;
    background-color: #212121;
    
}

.contentsBox {
    /* width: 500px; */
    /* height: 100%; */
    background-color: #616161;
    
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.box {
    border: 1px solid red;
    color: white;
}
</style>
