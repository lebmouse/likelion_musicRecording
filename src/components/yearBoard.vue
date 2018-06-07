<template>
<div :class="boardClass">
    <div class="year-contents">
        <div class="year-text">
            <div class="year-text-box">
                {{current_year}}
            </div>
        </div>
        <div class="year-layout" @scroll="scrolling">
            <div class="curtain head-curtain"></div>
            <div class="curtain foot-curtain"></div>
            <div class="month-text-box">
                <div class="month-text" v-for="i in 12" :key="i" @click="onFocus(i-1)">
                    {{month[i-1]}}
                </div>
            </div>
            <div class="year-box">
                <div class="day-outer-box">
                    <div class="non-day-box" v-for="(non,index3) in startDay.getDay()" :key="index3+`non`">
                    </div>
                </div>
                <div v-for="(items,index) in oneYear" :key="index" class="month-box" @click="onFocus(index)">
                    <div class="day-outer-box" v-for="(d,index2) in items" :key="index2" v-if="index2!==0">
                        <div class="day-box">
                            {{index+1}},{{d}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pointer: false,
            onfocusMonth: 0,
            dayOffsetTop: [],
            layoutPos: 0,
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    },
    watch: {
        layoutPos(e) {
            if (e > 0 && e < 200) {

            }
            // console.log(`watch : ${e}`)
        }
    },
    props: ['year'],
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
        scrolling(e) {
            let pos = e.target.scrollTop;
            let head = e.target.getElementsByClassName('head-curtain')[0].style,
                foot = e.target.getElementsByClassName('foot-curtain')[0].style;
            if (pos < 150) {
                head.opacity = pos / 140;
            } else if (pos > 730) {
                foot.opacity = (931-pos)/100;
            }
        },
        onFocus(index) {
            this.onfocusMonth = index;
            let yearClass = document.getElementsByClassName(this.boardClass)[0];
            let monthBox = yearClass.getElementsByClassName('month-box');
            let monthText = yearClass.getElementsByClassName('month-text');

            for (let i = 0; i < monthBox.length; i++) {
                monthBox[i].classList.remove('month-box-acitve');
                monthText[i].classList.remove('month-text-active');
            }
            monthBox[index].classList.toggle('month-box-acitve');
            monthText[index].classList.toggle('month-text-active');

        }
    },
    computed: {
        boardClass() {
            return 'year-board' + this.year
        },
        current_year() {
            return new Date().getFullYear() + this.year - 1;
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
                    this.dayOffsetTop.push(i - day);
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
        let yearClass = document.getElementsByClassName(this.boardClass)[0];
        let monthText = yearClass.getElementsByClassName('month-text');
        let dayBox = yearClass.getElementsByClassName('day-box');
        let topIndex = this.dayOffsetTop;
        let minusOffset = dayBox[0].offsetTop;
        // console.log(topIndex);
        // console.log(dayBox[0].offsetTop);

        for (let i = 1; i < monthText.length; i++) {
            // console.log(dayBox[topIndex[i - 1]]);
            monthText[i].style.top = `${dayBox[topIndex[i-1]].offsetTop-minusOffset}px`
        }
    }
}
</script>

<style scoped>
.year-contents {
    width: 269px;
    margin: 0;
    padding: 0;
    /* background-color: darkcyan; */
    /* float: left; */
}

.year-text {
    display: flex;
    justify-content: center;
    /* background-color: chartreuse; */
}

.year-text-box {
    margin-left: 20px;
    background-color: black;
    font: 2em bold;
    color: white;
    width: 3em;
    z-index: 6;
    text-align: center;
}

.year-layout {
    height: 660px;
    overflow-y: scroll;
    overflow-x: hidden;
    /* display: flex; */
    display: grid;
    grid-template-columns: 44px 1fr;
}

.year-layout::-webkit-scrollbar {
    visibility: hidden;
}

.curtain {
    background-color: burlywood;
    color: white;
    position: fixed;
    width: 255px;
    height: 80px;
    z-index: 2;
}

.head-curtain {
    opacity: 0;
    background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0));
}

.foot-curtain {
    opacity: 1;
    bottom: 0;
    background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
}

.month-text-box {
    /* background-color: cornflowerblue; */
    /* width: 1000px; */
    position: relative;
}

.month-text {
    /* background-color: cornsilk; */
    /* width: 45px; */
    font-size: 1.4em;
    position: absolute;
    /* height: 40px; */
    opacity: 0.5;
    color: white;
}

.non-day-box {
    float: left;
    width: 30px;
    height: 30px;
}

.month-box {
    opacity: 0.5;
}

.day-box {
    color: white;
    float: left;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    border: 1px solid white;
    box-sizing: border-box;
    font-size: 6px;
}

.day-outer-box {
    float: left;
    /* background-color: chartreuse; */
    /* width: 30px;
    height: 30px; */
}

.month-box-acitve {
    opacity: 1;
    animation: blink 0.5s;
}

.month-text-active {
    opacity: 1;
    animation: blink 0.5s;
}

@keyframes blink {
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
}
</style>
