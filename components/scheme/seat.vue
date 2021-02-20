<template>
    <div class="seat">
        <div class="content">
        <div class="re">
            <label for="">行:</label>
            <input type="text" v-model="row">
        </div>
        <div class="re">
            <label for="">列:</label>
            <input type="text" v-model="col">
        </div>
        <div class="re">
            <button class="yes" @click="add()">确认</button>
            <button class="cancel">取消</button>
        </div>
    </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            row:'',
            col:''
        }
    },
    methods:{
        add(){
            this.$http.post("http://129.204.185.247:8000/api/app01/addstudio",{
                sum_row:this.row,
                sum_col:this.col
            }).then((data)=>{
                alert(data.body.msg);
                this.$router.push('/manager/scheme/searchsch');
            })
        }
    }
}
</script>

<style scoped>
    label{
        display: block;
        margin-left: -120px;
    }
    .content{
        /* border:1px solid black; */
        width: 500px;
        text-align: center;
        margin:40px auto;
    }
    .content .re{
        margin:15px 0;
    }
     input[type="text"]{
        width: 300px;
        height: 40px;
        border-radius: 10px;
        outline: none;
        font-size: 20px;
        text-align:center;
        /* margin-left: 200px; */
    }
    button{
       width: 100px;
       height: 40px;
       margin:10px 15px;
    color: #fff;
    border:none;
    outline: none;
   }
   button.yes{
       background-color: #000;
   }
   button.cancel{
       /* background-color: red; */
       color: #000;
   }
</style>