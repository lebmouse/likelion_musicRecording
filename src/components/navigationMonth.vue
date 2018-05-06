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
    margin-left: 100px;
}

.navCover {
    height: 100%;
    width: 100px;
    background-color: red;
    border: 2px solid orange;
    position: fixed;
    float: left;
    z-index: 5;
}

.nav {
    height: 100%;
    width: 1100px;
    left: -900px;
    background-color: mediumvioletred;
    border: 2px solid yellow;
    position: fixed;
    animation: drawCloswAni;
    transition-duration: 0.8s;
    z-index: 4;
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
