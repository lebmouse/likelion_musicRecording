<template>
<nav>
    <div class="navBox">
        <div class="navCover" @click="drawing">
            <div class="coverBox">
                <div class="box dateBox">
                    2018
                </div>
                <div class="box TextBox">
                    year
                </div>
            </div>
        </div>
        <div id="navContent" class="nav" @click="drawing">
            <div class="navContents">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="i in 4" :key="i">
                        <div class="slide-content">
                            <div class="yearDateBox">
                                2017
                            </div>
                            <div class="month">
                                <div class="day">
                                    
                                </div>
                            </div>
                        </div>


                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>

</nav>
</template>

<script>
export default {
    data() {
        return {
            draw: false,
            swiperOption: {
                // width:1000,
                slidesPerView: 4,
                // spaceBetween: 100,
                grabCursor: true,
                keyboard: true,
                mousewheel: true,
                // replaceState: true,
                // slidesOffsetAfter : 100,
            },
        }
    },
    methods: {
        drawing(e) {

            let target = document.getElementById('navContent');
            if (this.draw === false) {
                target.classList.add("active");
            } else {
                target.classList.remove("active");

            }
            this.draw = !this.draw;

        }
    }
}
</script>

<style scoped>
/* .navBox {
    margin-left: 80px;
} */

.navCover {
    height: 100%;
    width: 80px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    position: fixed;
    float: left;
    z-index: 5;
}

.nav {
    height: 100%;
    width: 90%;
    min-width: 1000px;
    transform: translateX(-100%);
    left: 0;
    background-color: black;
    border: 2px solid white;
    position: fixed;
    animation: drawCloswAni;
    transition-duration: 0.8s;
    z-index: 4;
}

.active {
    transform: translateX(0);
}

.coverBox {
    height: 100%;
    width: 100%;
    color: white;
    background-color: black;
    box-sizing: border-box;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
}

.box {
    text-align: center;
}

.dateBox {
    margin-top: 5px;
    font-size: 25px;
}
</style>
