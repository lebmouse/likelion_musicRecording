<template>
<section id="musicHead">
  <div class="mainBox">
    <swiper :options="swiperOption" class="cover-contents">
      <swiper-slide class="box" v-for="i in 30" :key="i">
        <div class="dateBox">
          <span class="date">{{i}}th</span>
        </div>
        <div class="cover">
          <img src="../assets/img1.jpg" class="cover-image">
        </div>
      </swiper-slide>
    </swiper>
    <div class="buttons">
      <div class="btnBox leftBtn">
        <button class="audio-button">
          <i class="material-icons">fast_rewind</i>
      </button>
      </div>
      <div class="btnBox centerBtn">
        <button class="audio-button">
          <i class="material-icons">play_arrow</i>
      </button>
      </div>
      <div class="btnBox rightBtn">
        <button class="audio-button">
          <i class="material-icons">fast_forward</i>
      </button>
      </div>
    </div>
  </div>


</section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // width:1000,
        slidesPerView: 3,
        // spaceBetween: 100,
        grabCursor: true,
        keyboard: true,
        mousewheel: true,
        // replaceState: true,
        slidesOffsetBefore : 100,
        // slidesOffsetAfter : 100,
      },
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
  position: relative;
}

.cover-contents {
  z-index: 1;
}

.buttons {
  top: 0;
  margin-left:100px;
  position: absolute;

}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 420px;
  /* background-color: #616161;
  border: 1px solid blue;
  box-sizing: border-box; */
}

.date {
  font-size: 30px;
  color: white;
  /* border: 2px solid red; */
  /* background-color: #BDBDBD; */
}

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  /* background-color: #BDBDBD; */
  /* border: 2px solid white; */
  border-radius: 100%;
  box-sizing: border-box;
}

.cover-image {
  width: 350px;
  height: 350px;
  border-radius: 100%;
  border: 2px solid white;
}

.cover-image:hover {
  transform: scale(1.05);
  animation: coverHover;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes coverHover {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.btnBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 420px;
  /* background-color: blue; */
  /* border: 2px solid black; */
}

.audio-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.audio-button i {
  margin-top: 30px;
  color: white;
  font-size: 40px;
  z-index: 2;
}

.audio-button i:hover {
  color: rgba(255, 255, 255, 0.726);
}

</style>
