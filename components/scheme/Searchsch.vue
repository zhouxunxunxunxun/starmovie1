<template>
    <div class="search">
        <div class="container main">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading">查询演出厅</div>
        <div class="panel-body">
            Show 
            &nbsp;&nbsp;<select name="" id="">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
            </select>
            &nbsp;&nbsp;entries
            <div style="float:right;">
            search: <input type="text" name="" id="" v-model="inputId">
             <button @click="search()">search</button>
            </div>
        </div>
        <!-- Table -->
        <div class="tb">
        <table class="table table-bordered">
            <thead>
                <th>演出厅ID</th>
                <th>座位行</th>
                <th>座位列</th>
            </thead>
            <tbody>
            <tr v-for="item in list" :key="item.id" v-show="flag">
            <td>{{item.id}}</td>
            <td>{{item.sum_row}}</td>
            <td>{{item.sum_col}}</td>
            </tr>
            <tr v-for="item in listOne" :key="item.id" v-show="!flag">
              <td>{{item.id}}</td>
             <td>{{item.sum_row}}</td>
             <td>{{item.sum_col}}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class="panel-body">
            <nav aria-label="Page navigation">
  <ul class="pagination pagination-sm" style="float:right;">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </div>
    </div>
    </div>
    </div>

</template>

<script>
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
export default {
  data() {
    return {
      list:[],
      listOne:[],
      flag:true,
      inputId:''
    }
  },
  //演出计划信息
  created(){
    this.$http.get("http://129.204.185.247:8000/api/app01/getstudio")
    .then((data)=>{
    //   console.log(data);
        this.list = data.body;
      // console.log(this.list);
    })
    
  },
  methods: {
    search(){
      this.$http.post("http://129.204.185.247:8000/api/app01/getstudio",{
        stu_id:this.inputId
      }).then((data)=>{
        // console.log(data);
        this.listOne = data.body;
        this.flag = false;
        console.log(this.listOne);
      });
      // console.log(this.inputId);
    }
  }
}
</script>

<style scoped>
.main{
    /* margin-top: 20px; */
}

th,td{
    text-align: center;
}
.tb{
  overflow:auto;
  height: 400px;
}
</style>