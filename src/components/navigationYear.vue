<template>
<nav>
    <div class="navBox">
        <div class="navCover" @click="drawing">
            <div class="coverBox">
                <div class="box dateBox">
                    {{current_year}}
                </div>
                <div class="box TextBox">
                    year
                </div>
            </div>
        </div>

        <div id="navContent" class="nav">
            <div class="year-line">
            </div>
            <div class="nav-contents">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="i in 4" :key="i">
                        <year-board class="boards" :year="i"></year-board>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import yearBoard from './yearBoard';
export default {
    data() {
        return {
            draw: false,
            swiperOption: {
                width: 900,
                slidesPerView: 4,
                spaceBetween: 200,
                grabCursor: true,
                // keyboard: true,
                // mousewheel: true,
                // replaceState: true,
                // slidesOffsetAfter: 260,
            },
        }
    },
    components: {
        'year-board': yearBoard
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
        },
    },
    computed: {
        boardClass() {
            return 'year-board' + this.year
        },
        current_year() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>

.year-line {
    position: absolute;
    width:96.4%;
    height:20px;
    z-index: 1;
    /* background-color: rgba(222, 184, 135, 1); */
    border-bottom: 1px solid white;
}

.navCover {
    height: 100%;
    width: 80px;
    /* border-top: 2px solid rgba(255, 255, 255, 0.418); */
    /* border-left: 2px solid white; */
    /* border-bottom: 2px solid white; */
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
    border-right:2px solid white;
    position: fixed;
    animation: drawCloswAni;
    transition-duration: 0.8s;
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

.nav-contents {
    /* background-color: blue; */
    width: 80%;
    height: 90%;
    margin-right: 50px;
    margin-left: auto;
}
</style>
