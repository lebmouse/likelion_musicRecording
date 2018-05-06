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
                <div class="box copyBox">
                    TRACORD
                </div>
            </div>
        </div>
        <div id="navContent" class="nav" @click="drawing">

        </div>
    </div>

</nav>
</template>

<script>
export default {
    data() {
        return {
            draw: false
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
/* .navBox{
    
} */

.navCover {
    height: 100%;
    width: 100px;
    background-color: green;
    border: 2px solid orange;
    position: fixed;
    float: left;
    z-index: 5;
}

.coverBox {
    height: 100%;
    width: 100%;
    color: white;
    background-color: mediumpurple;
    border: 2px solid firebrick;
    box-sizing: border-box;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
}

.box {
    background-color: deepskyblue;
    border: 2px solid darkcyan;
    box-sizing: border-box;
    text-align: center;
}

.dateBox {
    font-size: 20px;
}

.TextBox {}

.copyBox {
    margin-top: auto;
    margin-bottom: 0;
}

.nav {
    height: 100%;
    width: 1000px;
    left: -900px;
    background-color: blue;
    border: 2px solid yellow;
    position: fixed;
    animation: drawCloswAni;
    transition-duration: 0.8s;
    z-index: 4;
}

.active {
    left: 0;
    animation: drawOpenAni;
    transition-duration: 0.8s;
}

@keyframes drawOpenAni {
    0% {
        left: -700px;
    }
    100% {
        left: 0;
    }
}

@keyframes drawCloseAni {
    0% {
        left: 0;
    }
    100% {
        left: -700px;
    }
}
</style>
