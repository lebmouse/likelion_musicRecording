<template>
<v-footer class="music-footer">
    <div class="mainBox">
        <div class="contentsBox">
            <div class="box dayBox">
                TODAY
            </div>
            <div class="box playerBox">
                <audio controls style="height:25px; background-color:black">
                </audio>
            </div>
            <div class="box signBox">
                Logout
            </div>
        </div>
    </div>
</v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.music-footer {
    display: flex;
    justify-content: center;
    background-color: transparent;
    margin-left:180px;
}

.mainBox {
    /* position: absolute; */
    display: flex;
    justify-content: center;
    /* background-color: #5f2d99; */
}

.contentsBox {
    display: flex;
    justify-content: center;
    /* background-color: #861440; */
}

.box {
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    /* background-color: green;
    border: 1px solid white; */
}
</style>
