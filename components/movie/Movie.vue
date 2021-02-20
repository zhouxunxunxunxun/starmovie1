<template>
    <ul class="movieList">
        
        <router-link  v-for="(item) in list"  
            :key="item.id"
            class="movieId"
            :style= "'url(' + item.image + ')'"
            :to="{path:'/showMovie',query: {id:item.id}}"
            
        >
        <div class="bg" id="bg">
            <img  :src='item.image'>
        </div>
        <div class="up">
            <p>名称：{{item.name}}</p>
            <p>电影长度：{{item.play_length}}分钟</p>
            <p>导演：{{item.director}}</p>
            <p>主演:{{item.actor}}</p>
            <p>类型:{{item.play_type}}</p>
        </div>
        </router-link>
        
    </ul>
</template>

<script>
const url = 'http://129.204.185.247:8000/api/app01/getonplay';
export default {
    props:['movie'],
    data(){
        return {
            isRouterAlive: true,
            list:[]
        }
    },
    watch:{
        movie: {
            immediate: true,
    　　　　 handler(newValue, oldValue) {
                this.list = this.movie;
    　　　　},
    　　　　deep: true
    　　}
    },
    methods:{
        getSwiper(){
            fetch(url).then(response => response.json()).
            then((movie)=>{
              movie.map((item)=>{
                item.image = 'http://129.204.185.247:8000'+item.image;
              })
              this.list = movie;
            })
        }
    },
    mounted(){
        this.getSwiper();
    }
    
}
</script>

<style scoped>

ul{
    padding-inline-start:0;
}
li{
    list-style: none;
    
}
.movielist{
    width: 100%;
    display: flex;
    justify-content:flex-start;
    
}
.movieId {
    position: relative;
    width: 161px;
    height: 275px;
    display: inline-block;
    padding: 9px 12px 0 0;
    margin-right: 30px;
}
.movieId .bg ,.up{
    position: absolute;
    width: 160px;
    height: 224px;
}
.movieId .bg img {
    width: 100%;
    height: 100%;
}
.movieId .up {
    margin-top: -20px;
}
.movieId .up{
    width: 160px;
    padding: 0 10px 0 10px;
    font-size: 12px;
    background: rgba(0, 0, 0,.5 );
    /* display: none; */
    color: #fff;
    opacity: 0;
    transition: transform 1s  cubic-bezier(.19,.54,0,1.14);
    cursor: pointer;
    box-sizing: border-box;
}

.movieId .up:hover{
    opacity: 1;
    transform:  translateY(20px);
}
.movieId .bg::after {
    display: block;
    position: absolute;
    content: "选座购票";
    line-height: 40px;
    width: 160px;
    height: 40px;
    background-color: #eb002a;
    color: #fff;
    margin-top: -3px;
    text-align: center;
    font-size: 12px;
}

</style>