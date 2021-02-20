<template>
    <div class="select">
        <h3>选座购票</h3>
        <table class="otable">
            <thead class="ohead">
				<tr class="tr1">
				    <th class="hall-time">放映时间</th>
				    <th class="hall-type">语言版本</th>
				    <th class="hall-name">放映厅</th>
				    <th class="hall-flow">座位情况</th>
				    <th class="hall-price">现价/影院价（元）</th>
				    <th class="hall-buy">选座购票</th>
				</tr>
			</thead>
            <tbody>
                <tr v-for="(item,index) in data"
                    :key="item.sch_id"
                >
				    <th class="hall-time">{{item.start_time}}</th>
				    <th class="hall-type">国语{{item.play_type}}</th>
				    <th class="hall-name">{{item.studio}}号厅</th>
				    <th class="hall-flow">
                        <div class="flow" >
                        <label for="" :class="{ocolor:color[index]}">{{wenzi[index]}}</label>
                        <span>
                            <i :style="{width:data[index].seat_ticket_count+'%'}"
                                :class="{obackground:color[index]}"
                            ></i>
                        </span>
                        </div>
                    </th>
				    <th class="hall-price">{{item.price}}</th>
				    <th class="hall-buy">
                        <router-link 
                            :to="{path:'/ticket',query: {id:id,sch_id:item.sch_id}}"
                        >选座购票</router-link>
                        </th>
				</tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const url1 = 'http://129.204.185.247:8000/api/app01/getschemebyplayid';
export default {
    props:['id'],
    data(){
        return{
            data:[],
            color:[],
            wenzi:[]
        }
    },
    created(){
        this.getdata();
    },
    methods:{
        getdata(){
            fetch(url1,{
            method:'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'play_id='+this.id
            }).then(response => response.json())
            .then((data)=>{
                data.map((item,index)=>{
                    item.start_time = item.start_time.slice(11,16);
                    if(item.seat_ticket_count>=80){
                        this.color.splice(index,1,true);
                        this.wenzi.splice(index,1,'爆满');
                    }else{
                        this.color.splice(index,1,false);
                        this.wenzi.splice(index,1,'宽松');
                    }
                })
                this.data = data;
                // console.log(data);
              
            })
        }
    }
}
</script>

<style scoped>
.ocolor{
    color: #ECAC60 !important;
}
.obackground{
    background: #ECAC60 !important;
}
.select{
    margin-top: 20px;
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
}
.ohead{
    width: 100%;
    height: 40px;
    line-height: 40px;
    width: 100%;
    font-size: 14px;
    background: #EAEAEA;
    color: #797979;
}
tr{
    display: flex;
    justify-content:space-between;
}
.hall-time,.hall-type{
    width: 138px;
    color: #797979;
}
.hall-name{
    width: 99px;
    color: #797979;
}
.hall-flow{
    width: 178px;
}
.hall-price{
    width: 279px;
}
.hall-buy{
    width: 158px;
}
tbody tr{
    height: 60px;
    line-height: 60px;
}
tbody tr:nth-of-type(2n){
    background: #f6f6f6;
}
tbody tr .hall-flow{
    line-height: 14px;
    color: #26bb7e;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content:center;
}
tbody tr .hall-price{
    color: #f40;
    font-size: 20px;
}
tbody tr .hall-buy a{

    margin: 14px auto 0;
    display: block;
    width: 128px;
    height: 33px;
    line-height: 33px;
    background: #f42429;
    color: #fff;
    font-size: 14px;
}
tbody tr .hall-buy a:hover{
    text-decoration: underline;
}
tbody tr .hall-flow .flow{
    height: 14px;
}
tbody tr .hall-flow .flow span{
    /* float: left; */
    margin-left: 5px;
    width: 54px;
    height: 14px;
    background: #eaeaea;
    display: inline-block;
}
tbody tr .hall-flow .flow label{
    float: left;
}
tbody tr .hall-flow .flow span i{
    display: block;
    float: left;
    height: 100%;
    background: #26bb7e;
}
</style>