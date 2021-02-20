<template>
<div class="change">
    <table class="table table-bordered table-striped">
           <tbody>
            <tr>
            <td>剧目ID</td>
            <td><input type="text" name="" id="" v-model="inputId"></td>
            </tr>
             <tr>
             <td>剧目名称</td>
             <td><input type="text" name="" id="" class="name" v-model="inputName"></td>
             </tr>
             <tr>
            <td>剧目简介</td>
            <td><textarea name="" id="" cols="80" rows="6" style="font-size:20px;outline:none;" v-model="inputArea"></textarea></td>
             </tr>
             <tr>
             <td>剧目主演</td>
             <td><input type="text" name="" id="" v-model="inputMain"></td>
             </tr>
             <tr>
             <td>剧目导演</td>
             <td><input type="text" name="" id="" v-model="inputDer"></td>
             </tr>
             <tr>
             <td>剧目时长</td>
             <td><input type="text" name="" id="" v-model="inputTime"></td>
             </tr>
              <tr>
             <td>影票单价(￥)</td>
             <td><input type="text" name="" id="" v-model="inputPrice"></td>
             </tr>
              <tr>
             <td>影片类型</td>
             <td>
                <select id="cs" @change="changeType()">
                <option v-for="item in options" :key="item.value" :value="item.name">
                 {{item.name}}
                </option>
</select>
             </td>
             </tr>
        </tbody>
    </table>
      <div class="panel-body">
            <nav aria-label="Page navigation">
                <button class="add"  @click="add()">修改</button>
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
            myVal:0,//默认选中第一项
        options:[
            {
                name:'',
                value:0
            },
            {
                name:'科幻',
                value:1
            },
            {
                name:'搞笑',
                value:2
            },
            {
                name:'悬疑',
                value:3
            },
            {
                name:'恐怖',
                value:4
            }
        ],
        inputId:'',
        inputName:'',
        inputArea:'',
        inputMain:'',
        inputDer:'',
        inputTime:'',
        inputPrice:''
        }
    },
    methods:{
        changeType(){
            let value = document.getElementById('cs').value;
            this.myVal = value;
            // console.log(this.myVal);
        },
        add(){
            this.$http.post("http://129.204.185.247:8000/api/app01/updateplay",{
                id:this.inputId,
                name:this.inputName,
                brief_info:this.inputArea,
                actor:this.inputMain,
                director:this.inputDer,
                play_length:this.inputTime,
                price:this.inputPrice,
                play_type:this.myVal
            }).then((data)=>{
                if(data.status==200){
                    alert(data.body.msg);
                    this.$router.push("/manager/opera/searchop");
                }
            });
            // console.log(this.inputName,this.inputArea,this.inputMain,this.inputDer,this.inputTime,this.inputPrice,this.myVal);
        }
    },
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
       height: 50px;
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