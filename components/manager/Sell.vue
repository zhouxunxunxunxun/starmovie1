<template>
<div class="sell">
    <div class="hot">
    <h2>Thermal analysis:</h2>
    <img src="../../assets/image/1.png" alt="">
    <div class="mov_id">
    <div class="mov" style="background-color:rgb(185,214,253);"></div>电影1
    <div class="mov" style="background-color:rgb(253,181,181);"></div>电影2
    <div class="mov" style="background-color:rgb(210,253,181);"></div>电影3
    <div class="mov" style="background-color:rgb(249,181,253);"></div>电影4
    <div class="mov" style="background-color:rgb(215,181,253);"></div>电影5
    </div>
    </div>
    <div class="data">
        <img src="../../assets/image/2.jpg" alt="">
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
    h2{
        font-weight: bold;
    }
    .hot{
        width: 600px;
        /* border:1px solid black; */
        margin: 20px 60px;
        position: relative;
    }
    .mov_id{
        /* border:1px solid black; */
        width: 80px;
        position: absolute;
        right: 20px;
        top:0;
    }
    .mov{
        /* margin:10px 0; */
        /* border:1px solid black; */
        width: 50px;
        height: 30px;
    }
    .data{
        /* border:1px solid black; */
        position: absolute;
        right: 30px;
        top:120px;
    }
    .data img{
        width: 700px;
        height: 400px;
    }
</style>
