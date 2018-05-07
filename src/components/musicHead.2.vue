<template>
<section>
  <div class="mainBox">
    <div id="coversId" class="cover-contents" @click="test" @keyup.right="rightCover" v-on:keyup.37="leftCover">
      <div class="box" v-for="i in 9" :key="i" v-on:keyup.right="rightCover">
        <div class="dateBox">
          <span class="date">{{i}}th</span>
        </div>
        <div class="cover">
          <img src="../assets/img1.jpg" class="cover-image">
        </div>
      </div>
    </div>
    <md-card class="mainBox">
      <md-card-media  class="cover-contents">
        <swiper :options="swiperOption">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <swiper-slide>Slide 10</swiper-slide>
        </swiper>
      </md-card-media>
    </md-card>
    <!-- <div class="buttons">
      <div class="leftBtn">

      </div>
      <div class="centerBtn">

      </div>
      <div class="rightBtn">

      </div>
    </div> -->

    <!-- <div class="box left-box">
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
    </div> -->
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      covers: document.getElementById('coversId'),
      nowCover: 0,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    leftCover() {

    },
    rightCover() {
      console.log("rigting");
      let now = this.nowCover;
      this.covers.scrollLeft -= 300;
    },
    test() {
      console.log("testing");
    }

  }
};
</script>

<style scoped>
.mainBox {
  /* display: flex; */
  width: 100%;
  min-width: 800px;
  height: 400px;
  background-color: #212121;
}

.cover-contents {
  display: flex;
  /* overflow-x: scroll; */
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #424242;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
  background-color: #616161;
  border: 1px solid blue;
  box-sizing: border-box;
  flex-shrink: 0;
}

.dateBox {
  border: 2px solid red;
  background-color: #EEEEEE;
}

.date {
  font-size: 30px;
  color: white;
  border: 2px solid red;
  background-color: #BDBDBD;
}

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #BDBDBD;
  border: 2px solid red;
  border-radius: 100%;
  box-sizing: border-box;
}

.cover-image {
  width: 100%;
  height: 100%;
  border: 2px solid blue;
  border-radius: 100%;
}

.cover-image:hover {
  width: 110%;
  height: 107%;
  animation: coverHover 0.3s;
}

@keyframes coverHover {
  0% {
    width: 100%;
    height: 108%;
  }
  100% {
    width: 110%;
    height: 107%;
  }
}


/* .audio-button {
  position: absolute;
}

.audio-button i {
  color: white;
  font-size: 3em;
}

.audio-button i:hover {
  color: rgba(255, 255, 255, 0.747);
}  */
</style>
