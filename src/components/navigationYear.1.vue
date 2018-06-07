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
                    <swiper-slide v-for="i in 1" :key="i">
                        <div class="slide-content">
                            <div class="yearDateBox">
                                2017
                            </div>
                            <!-- <div class="monthBox">
                                <div class="month" v-for="j in 12" :key="j">
                                    <div class="dayBox" v-for="k in 35" :key="k">
                                        <div class="day">
                                            {{j}},{{k}}
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="year-calendar">
                                <div class="year-box">
                                    <table class="year-table">
                                        <tr v-for="i in 52" :key="i">
                                            <td v-for="j in 7" :key="j">{{i}},{{j}} </td>
                                        </tr>
                                    </table>
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
                spaceBetween: 100,
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
            // this.draw = !this.draw;
        }
    },
    computed: {
        current_year() {
            return new Date().getFullYear();
        },
        startDay() {
            return new Date(this.current_year, 0, 1);
        },
        oneYear() {
            let y = [];
            let d = this.startDay,
                year = d.getFullYear(),
                dLength = 32 - this.startDay.getDate(),
                month = d.getMonth(),
                date = d.getDate(),
                day = d.getDay();


            for (let i = day; i < day + 376; i++) {
                //초기 년도
                let len = 32 - new Date(month, month, 32).getDate();
                // console.log(len + '\n');
                if (date > len) {
                    date = 0;
                    month++;
                    console.log('\n');
                }
                console.log(`${month+1},${date}  `);
                y[i] = date++;
            }
            return y;
        }
    },
    mounted() {

        console.log(this.oneYear);
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

.navContents {
    background-color: blue;
    width: 80%;
    height: 80%;
    float: right;
    margin-right: 50px;
}

.monthBox {
    overflow-y: scroll;
    height: 800px;
    background-color: violet;
    width: 235px;
}

.month {
    /* height:; */
    background-color: tomato;
    border: 1px solid black;
    /* float: left; */
    /* overflow: hidden; */
}

.day {
    font-size: 0.8em;
    color: white;
    background-color: red;
    width: 30px;
    height: 30px;
    border: 1px solid white;
    border-radius: 100%;
    float: left;
}

.year-calendar {
    background-color: darkcyan;
}

.year-table{
    overflow: scroll;
}

.year-table td {
    border: 1px solid black;
}
</style>
