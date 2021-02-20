<template>
    <div class="ticket">
        <div class="container main">
        <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading">查询演出票</div>
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
              <th>id</th>
                <th>剧目名称</th>
                <th>票价</th>
                <th>演出时间</th>
                <th>演出厅</th>
                <th>影片类型</th>
            </thead>
            <tbody>
            <tr v-for="item in list" :key="item.ticid" v-show="flag">
            <td>{{item.ticid}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.time}}</td>
            <td>{{item.studio}}号厅</td>
            <td>{{item.play_type}}</td>
            </tr>
            <tr v-show="!flag">
            <td>{{listOne.ticid}}</td>
            <td>{{listOne.name}}</td>
            <td>{{listOne.price}}</td>
            <td>{{listOne.time}}</td>
            <td>{{listOne.studio}}号厅</td>
            <td>{{listOne.play_type}}</td>
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
      inputId:'',
      list:[],
      listOne:[],
      flag:true
    }
  },
  created(){
    this.$http.get("http://129.204.185.247:8000/api/app01/getticket")
    .then((data)=>{
      this.list = data.body;
      // console.log(data);
    })
  },
  methods:{
    search(){
      this.$http.post("http://129.204.185.247:8000/api/app01/getticket",{
        tic_id:this.inputId
      }).then((data)=>{
        this.listOne = data.body;
        this.flag = false;
        // console.log(this.listOne);
      })
    }
  }
}
</script>

<style scoped>
.main{
    margin-top: 60px;
}
.tb{
  overflow: auto;
  height: 400px;
}
</style>