<template>
<div class="mainBox">
    <div class="contentsBox">
        <div class="headBox">
            <div class="box nameBox">
                <div class="name">
                    <i class="material-icons">music_note</i>
                    <span class="singerName">SINGER</span>
                    <span>-</span>
                    <span class="musicName">MUSIC NAME</span>
                    <i class="material-icons">music_note</i>
                </div>
            </div>
            <div class="box desBox">
                <div class="description">
                    옛날에 오빠가 추천해준 노랜데 문득 생각나서 요즈음 한창 듣고 있다.
                    <br>매력적인 목소리와 신나는 비트가 정말 잘 어울린다.
                    <br>미세먼지 떄문에 기분이 꿀꿀해서 그런지 신나는 노래만 듣게 된다.
                </div>
            </div>
        </div>
        <div class="box dateBox">
            <div class="date">
                <div class="dateIcon">
                    <i class="material-icons">cloud</i>
                    <span class="temperature">24</span>
                    <span>.C</span>
                    <div class="location">서울시 성북구 안암동2가 안암동 주민센터</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainBox {
    width: 100%;
    min-width: 800px;
    height: 250px;
    background-color: #212121;
}

.contentsBox {
    /* width: 500px; */
    height: 100%;
    background-color: #616161;
    margin: 0 auto;
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
}

.box {
    border: 1px solid red;
    color: white;
}

.nameBox {
    font-size: 2.2em;
    text-align: center;
}

.desBox {
    text-align: center;
    display: flex;
    justify-content: center;
}

.description {
    background-color: rgb(48, 45, 45);
    padding: 15px 5px;
    width: 500px;
}

.dateBox {
    text-align: center;
    margin-top: auto;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
}

.date {
    background-color: rgb(48, 45, 45);
    padding: 15px 8px 15px 8px;
    width: 500px;
}
</style>
