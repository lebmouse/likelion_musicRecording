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
                <swiper :options="swiperOption">
                    <swiper-slide v-for="i in 1" :key="i">
                        <div class="year-contents">
                            <div class="year-text">
                                2018
                            </div>
                            <div class="year-layout">
                                <div class="month-text-box">
                                    <div class="month-text" v-for="i in 12" :key="i" @click="onFocus(i-1)">
                                        {{month[i-1]}}
                                    </div>
                                </div>
                                <div class="year-box">
                                    <div>
                                        <div class="non-day-box" v-for="(non,index3) in startDay.getDay()" :key="index3+`non`">
                                        </div>
                                        <div v-for="(items,index) in oneYear" :key="index" class="month-box" @click="onFocus(index)">
                                            <div class="day-box" v-for="(d,index2) in items" :key="index2" v-if="index2!==0">
                                                {{index+1}},{{d}}
                                            </div>
                                        </div>
                                    </div>
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
                width: 750,
                slidesPerView: 3,
                spaceBetween: 300,
                grabCursor: true,
                // keyboard: true,
                // mousewheel: true,
                // replaceState: true,
                slidesOffsetAfter: 100,
            },
            pointer: false,
            onfocusMonth: 0,
            dayOffsetTop: [],
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
        },
        onFocus(index) {
            this.onfocusMonth = index;
            let monthBox = document.getElementsByClassName('month-box');
            let monthText = document.getElementsByClassName('month-text');
            for (let i = 0; i < monthBox.length; i++) {
                monthBox[i].classList.remove('year-active');
                monthText[i].classList.remove('year-active');
            }
            monthBox[index].classList.add('year-active');
            monthText[index].classList.add('year-active');

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

                if (date > len) {
                    this.dayOffsetTop.push(i - day+1);
                    monRay[month] = dateRay;
                    dateRay = [];
                    date = 1;
                    month++;
                }
                dateRay[date] = date++;

            }
            return monRay;
        }
    },
    mounted() {
        // console.log(this.oneYear);
        let monthText = document.getElementsByClassName('month-text');
        let dayBox = document.getElementsByClassName('day-box');
        let topIndex = this.dayOffsetTop;
        for (let i = 1; i < monthText.length; i++) {
            monthText[i].style.top = `${dayBox[topIndex[i-1]].offsetTop-21}px`
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

.nav-contents {
    background-color: blue;
    width: 80%;
    height: 90%;
    margin-right: 50px;
    margin-left: auto;
}

.year-contents {
    width: 257px;
    /* background-color: darkcyan; */
    /* float: left; */
}

.year-layout {
    background-color: crimson;
    height: 660px;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
}

.month-text-box {
    background-color: cornflowerblue;
    width: 140px;
    position: relative;
}

.month-text {
    background-color: cornsilk;
    font: 2em;
    position:absolute;
    height:40px;
}

.non-day-box {
    float: left;
    width: 30px;
    height: 30px;
}

.day-box {
    float: left;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: 1px solid white;
    box-sizing: border-box;
    font-size: 6px;
}

.year-active {
    opacity: 0.5;
    background-color: coral;
}
</style>
