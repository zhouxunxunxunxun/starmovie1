<template>
    <div class="change">
    <table class="table table-bordered table-striped">
         <tbody>
            <tr>
             <td>演出计划ID</td>
             <td><input type="text" name="" id="" v-model="inputPlay"></td>
             </tr>
             <tr>
             <td>剧目ID</td>
             <td><input type="text" name="" id="" v-model="inputId"></td>
             </tr>
             <tr>
             <td>演出厅</td>
             <td><input type="text" name="" id="" v-model="inputMov"></td>
             <td></td>
             </tr>
             <tr>
             <td>演出时间</td>
             <td>
                      <input type="text" name="" id="" v-model="inputTim">
                      </td>
             </tr>
        </tbody>
    </table>
      <div class="panel-body">
            <nav aria-label="Page navigation">
                <button class="add" @click="add()">添加</button>
                <button class="cancel">取消</button>
            </nav>
        </div>
</div>

</template>

<script>
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
export default {
    data() {
        return {
            inputPlay:'',
            inputId:'',
            inputMov:'',
            inputTim:''
        }
    },
    methods:{
        add(){
            this.$http.post("http://129.204.185.247:8000/api/app01/updatescheme",{
                id:this.inputPlay,
                play_id:this.inputId,
                stu_id:this.inputMov,
                start_time:this.inputTim
            }).then((data)=>{
                 alert(data.body.msg);
                this.$router.push("/manager/perform/searchper");
            })
        }
    }
}
</script>

<style scoped>
   *{
        margin:0;
        padding:0;
    }
   .table tbody tr td{
        vertical-align:middle;
    }
    td{
        /* vertical-align: center; */
        text-align: center;
        /* line-height: 80px; */
    }
   tr{
       height: 120px;
   }
    input[type="text"]{
        width: 400px;
        height: 40px;
        border-radius: 10px;
        outline: none;
        font-size: 20px;
        text-align:center;
        /* margin-left: 200px; */
    }
    
    .radio{
        text-align: left;
    }
   select{
       width: 300px;
       height: 40px;
       border-radius: 10px;
       outline: none;
   }
   button{
       width: 100px;
       height: 40px;
       margin:10px 15px;
    color: #fff;
    border:none;
    outline: none;
   }
   button.add{
       background-color: #000;
   }
   button.cancel{
       /* background-color: red; */
       color: #000;
   }
</style>