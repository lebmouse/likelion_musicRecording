<template>
<section>
  <div class="mainBox">
    <div class="box left-box">
      <div class="cover left-cover">
        <button class="cover-button">          
          <img src="../assets/img1.jpg" class="cover-image">
        </button>
        <button class="audio-button">
          <i class="material-icons">fast_rewind</i>
        </button>
      </div>
    </div>
    <div class="box center-box">
      <div class="cover center-cover">
        <button class="cover-button">          
          <img src="../assets/img2.jpg" class="cover-image">
        </button>
        <button class="audio-button">
          <i class="material-icons">play_arrow</i>
        </button>
      </div>
    </div>
    <div class="box right-box">
      <div class="cover right-cover">
        <button class="cover-button">
          <img src="../assets/img3.jpg" class="cover-image">
        </button>
        <button class="audio-button">
          <i class="material-icons">fast_forward</i>
        </button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {};
</script>

<style scoped>
.mainBox {
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-width: 800px;
  height: 430px;
  background-color: #212121;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  min-width:400px;
  height: 100%;
  /* 알아보기 위한 수단 */
  background-color: #616161;
  border: 2px solid;
  border-color: red;
  box-sizing: border-box;
}

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: #212121;
  border: 2px solid;
  /* border-radius:100%; */
  border-color: red;
  box-sizing: border-box;
}

.cover-button{
  /* width: 400px;
  height: 400px;
  border: 2px solid white; */
  border-radius: 100%;
  /* float:left; */
  /* position: absolute; */
}

.cover-image {
  width: 400px;
  height: 400px;
  border: 2px solid blue;
  border-radius: 100%;
  /* box-sizing: border-box; */
}

.cover-image:hover{
  width:405px;
  height: 405px;
  border:3px solid rgba(0, 0, 255, 0.514);
  animation: coverHover 0.2s;
}

@keyframes coverHover {
  0%{
    width: 400px;
  height: 400px;
  border: 2px solid blue;
  }
  100%{
    width:405px;
  height: 405px;
  border:3px solid rgba(0, 0, 255, 0.514);
  }
}

.audio-button{
  position: absolute;
}

.audio-button i{
  color: white;
  font-size: 3em;
}

.audio-button i:hover{
  color:rgba(255, 255, 255, 0.747);
}
</style>
