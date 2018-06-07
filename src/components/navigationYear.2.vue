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

        <div id="navContent" class="nav">
            <div class="nav-contents">
                <div class="year-contents">
                    <div class="year-text">
                        2017
                    </div>
                    <div class="year-layout">
                        <div class="year-box">
                            <div class="month-box" v-for="(items,index) in oneYear" :key="index">
                                <div class="day-box" v-for="(d,index2) in items" :key="index2" v-if="index2!==0">
                                    {{index+1}},{{d}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="year-contents">
                    <div class="year-text">
                        2017
                    </div>
                    <div class="year-layout">
                        <div class="year-box">
                            <div class="day-box" v-for="(item,index) in oneYear" :key="index">
                                {{item}},{{index}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="year-contents">
                    <div class="year-text">
                        2017
                    </div>
                    <div class="year-box">
                        <div class="day-box" v-for="(item,index) in oneYear" :key="index">
                            {{item}},{{index}}
                        </div>
                    </div>
                </div>-->
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
            pointer: false,
            monthRay: []
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
            let monRay = [],
                dateRay = [];
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
                    monRay[month] = dateRay;
                    dateRay = [];
                    date = 1;
                    month++;
                    // console.log('\n');
                }
                // console.log(`${month+1},${date}  `);
                dateRay[date] = date;
                y[i] = date++;

            }
            return monRay;
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

.nav-contents {
    background-color: blue;
    width: 80%;
    height: 90%;
    margin-right: 50px;
    margin-left: auto;
}

.year-contents {
    width: 310px;
    /* background-color: darkcyan; */
    /* float: left; */
}

.year-layout {
    background-color: crimson;
    height: 660px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.year-box {}

.month-box {
    /* display: grid;
    grid-template-columns: repeat(7, 1fr); */
}

.day-box {
    float:left;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    border: 1px solid white;
    box-sizing: border-box;
}

.year-active {
    opacity: 0.5;
    background-color: coral;
}
</style>
