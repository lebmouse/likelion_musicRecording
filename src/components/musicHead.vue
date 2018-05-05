<template>
  <section>
      <div class="mainBox">

          <div class="box left-box">
                <div class="cover left-cover">
                  <button class="cover-button">
                        <!-- <img src="../assets/img1.jpg" class="cover-image"> -->
                        <div class="audio-button">
                            <i class="material-icons">fast_rewind</i>
                        </div>
                        
                  </button>
                </div>
          </div>

          <div class="box center-box">
              <div class="cover center-cover"></div>
          </div>

          <div class="box right-box">
            <div class="cover left-cover">
                <button class="cover-button">
                    <img src="../assets/img3.jpg" class="cover-image">
                </button>
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
.mainBox{
    display:flex;
    justify-content:space-around;
    width:100%;
    min-width:800px;
    height:500px; 
    background-color: #212121;
}

.box{
    display:flex;
    justify-content: center;
    align-items:center;
    width:33.33%;
    height:100%;
    /* 알아보기 위한 수단 */
    background-color:#616161;
    border:2px solid;
    border-color:red;
    box-sizing: border-box;
}

.cover{
    display:flex;
    justify-content: center;
    align-items:center;
    width:400px;
    height:400px;
    background-color:#212121;
    border:2px solid;
    /* border-radius:100%; */
    border-color:red;
    box-sizing: border-box;
}
.cover-button{
    /* width:400px;
    height:400px; */
}

.cover-image{
    width:400px;
    height:400px;
    border:2px solid white;
    border-radius:100%;
    box-sizing: border-box;

}

</style>
