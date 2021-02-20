<template>
<div class="del">
  <div class="content">
  <div class="opera">
      <label for="">需要删除的演出厅ID：</label>
      <input type="text" v-model="inputId">
  </div>
  <div class="btn">
      <button class="del" @click="del()">删除</button>
      <button class="cancel">取消</button>
  </div>
  </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            inputId:''
        }
    },
    methods:{
        del(){
            this.$http.post("http://129.204.185.247:8000/api/app01/delstudio",{
                stu_id:this.inputId
            }).then((data)=>{
                 alert(data.body.msg);
                this.$router.push("/manager/scheme/searchsch");
            })
        }
    }
}
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    input{
          width: 300px;
        height: 40px;
        border-radius: 10px;
        outline: none;
       
        text-align:center;
    }
    .content{
        /* border:1px solid black; */
        width: 600px;
        margin:100px auto;
        text-align: center;
         font-size: 20px;
    }
     button{
       width: 100px;
       height: 40px;
       margin:10px 15px;
    color: #fff;
    border:none;
    outline: none;
   }
   button.del{
       background-color: #000;
   }
   button.cancel{
       /* background-color: red; */
       color: #000;
   }
</style>