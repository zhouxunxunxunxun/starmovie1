<template>
    <div class="scheme">
         <ul>
         <router-link :to="{name:'addsch'}" tag="li">增加演出厅</router-link>
         <router-link :to="{name:'changesch'}" tag="li">修改演出厅</router-link>
         <router-link :to="{name:'delsch'}" tag="li">删除演出厅</router-link>
         <router-link :to="{name:'searchsch'}" tag="li">查询演出厅</router-link>
         </ul>
         <div class="content">
             <router-view></router-view>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
     *{
        margin:0;
        padding:0;
    }
    ul{
        list-style: none;
        width: 18%;
    }
    li{
        height: 70px;
        width: 100%;
        text-align: center;
        line-height: 70px;
        background-color: #eee;
        color: #000;
        border-bottom: 1px solid #fff;
        cursor: pointer;
    }
    .content{
        height: 70%;
        width: 70%;
        /* border:1px solid black; */
        float: right;
        position: absolute;
        top:74px;
        left: calc(20% - 20px);
        
    }
    .active{
       background-color: #000;
       color: #fff;
       border-top: 1px solid #fff;
   }
</style>