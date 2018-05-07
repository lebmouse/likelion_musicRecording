<template>
<nav>
    <div class="navBox">
        <div class="navCover" @click="drawing">
            <div class="coverBox">
                <div class="box dateBox">
                    Apr
                </div>
                <div class="box yearTextBox">
                    month
                </div>
            </div>
        </div>
        <div id="navContent2" class="nav" @click="drawing">
            <div class="monthBox">
                <div class="month-wrapperr">
                    <div class="head" v-for="d in day" :key="d">{{d}}</div>
                    <div class="dayBox" v-for="i in 35" :key="i">
                        <div class="day">
                            <div class="dayText">
                                {{i}}
                            </div>
                        </div>
                    </div>
                </div>
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
            day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
        }
    },
    methods: {
        drawing(e) {
            let target = document.getElementById('navContent2');
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
.navBox {
    margin-left: 80px;
}

.navCover {
    height: 100%;
    width: 80px;
    border-top: 2px solid white;
    border-left:2px solid white;
    border-bottom: 3px solid white;
    box-sizing: border-box;
    position: fixed;
    float: left;
    z-index: 4;
}

.nav {
    height: 100%;
    width: 90%;
    min-width: 1000px;
    transform: translateX(calc(-100% + 83px));
    /* left: 0; */
    /* left: -1000px; */
    background-color: black;
    border: 2px solid white;
    position: fixed;
    animation: drawCloswAni;
    transition-duration: 0.8s;
    z-index: 3;
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
    flex-direction: column;
}

.box {
    /* background-color: deepskyblue;
    border: 2px solid darkcyan; */
    box-sizing: border-box;
    text-align: center;
}


.head {
    font-size: 20px;
}

.monthBox {
    /* display:flex;
    justify-content:flex-end; */
    float: right;
    width: 800px;
    margin-top: 20px;
    margin-right: 8%;
    height: 100%;
}

.month-wrapperr {
    display: grid;
    height: 87%;
    min-height: 650px;
    grid-template-columns: repeat(7, 14.28%);
    grid-template-rows: 35px repeat(5, 1fr);
    /* background-color: tomato; */
}

.head {
    color:white;
    padding-bottom: 5px;
    text-align: center;
}

.dayBox {
    display: flex;
    justify-content: center;
}

.dayBox {
    display: flex;
    width: 100%;
    height: 95%;
    /* background-color: teal; */
}

.day {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 50%;
    /* margin-top: -100px; */
    /* line-height: 10; */
    text-align: center;
    background: #212121;
    border: 1px solid white;
    border-radius: 100%;
}

.dayText{
    color:white;
    font-size:16px;
}
</style>
