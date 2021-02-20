export default {
    //命名空间
    namespaced:true,
    state:{
        isLogin:false,
        name:'未登录',
        sessionId:'',
   
        userId:'',
        email:''
    },
    getters:{
      //相当于计算属性
      //通过参数直接拿到state的值
      //实现复用
      //形参getters可以直接获取a
      
    },
    mutations:{
        
      
    },
    //执行异步操作
    actions:{
      //ctx => store
    }
  
    
  }